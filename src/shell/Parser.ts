import Parser from "web-tree-sitter";
import Bash from "tree-sitter-bash";

const parser = new Parser();
parser.setLanguage(Bash);

export default parser;
export type { Parser };
