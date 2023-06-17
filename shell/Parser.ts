import * as Parser from "@curlconverter/tree-sitter";
import * as Bash from "@curlconverter/tree-sitter-bash";

const parser = new Parser();
parser.setLanguage(Bash);

export default parser;
export type { Parser };
