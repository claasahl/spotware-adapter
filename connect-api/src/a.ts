import fs from "fs";
import { parse, Root } from "protobufjs";

// hope!
const proto = fs.readFileSync("./assets/OpenApiCommonMessages.proto");
// const results = parse(proto.toString(), {alternateCommentMode: true})
// console.log(JSON.stringify(results, null, 2));
const root: Root = new Root();
const results = parse(proto.toString(), root, { alternateCommentMode: true });
const json = JSON.stringify(root.toJSON({ keepComments: true }), null, 2);
// console.log(JSON.stringify(results, null, 2));
console.log();
// console.log(results)
fs.writeFileSync("./assets/test.json", json);
console.log("");
