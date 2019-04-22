import commandLineArgs from "command-line-args";
import { parse, Root } from "protobufjs";
import globby from "globby";
import fs from "fs";
import path from "path";

const optionDefinitions = [
  {
    name: "input",
    alias: "i",
    type: String,
    multiple: true,
    defaultOption: true
  }
];
const options = commandLineArgs(optionDefinitions);
const inputPatterns: string[] = options.input;
(async (inputPatterns: string[]): Promise<void> => {
  for (const inputPattern of inputPatterns) {
    const files = await globby(inputPattern);
    for (const file of files) {
      const root = parseProtoFile(file);
      const jsonFile = toJsonFilename(file);
      writeJsonFile(jsonFile, root);
    }
  }
})(inputPatterns);

function parseProtoFile(file: string): Root {
  const data = fs.readFileSync(file);
  const root = new Root();
  parse(data.toString(), root, { alternateCommentMode: true });
  return root;
}

function toJsonFilename(file: string): string {
  const parent = path.dirname(file);
  const basename = path.basename(file);
  const extname = path.extname(file);
  const jsonFile = basename.replace(extname, ".json");
  return path.join(parent, jsonFile);
}

function writeJsonFile(file: string, root: Root) {
  const data = root.toJSON({ keepComments: true });
  const jsonData = JSON.stringify(data, stripNullComments);
  fs.writeFileSync(file, jsonData);
}

function stripNullComments(key: string, value: any): any {
  if (key === "comment" && !!!value) {
    return undefined;
  }
  return value;
}
