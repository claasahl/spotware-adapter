import { GraphQLScalarType } from "graphql";
import Long from "long";

export const long = new GraphQLScalarType({
  name: "Long",
  //invoked to parse client input that was passed through variables.
  parseValue(variable) {
    return Long.fromString(variable);
  },
  //invoked to parse client input that was passed inline in the query.
  parseLiteral(literal) {
    return Long.fromString((literal as any).value);
  },
  //invoked when serializing the result to send it back to a client.
  serialize(value: Long) {
    return value.toString();
  }
});
export default long;
