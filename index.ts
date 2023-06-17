export {
  toJavaScript,
  toJavaScriptWarn,
} from "./generators/javascript/javascript";
export { toNodeAxios, toNodeAxiosWarn } from "./generators/javascript/axios";
export { toHTTP, toHTTPWarn } from "./generators/http";
export { toJsonString, toJsonStringWarn } from "./generators/json";
export { toNode, toNodeWarn } from "./generators/javascript/javascript";
export {
  toNodeRequest,
  toNodeRequestWarn,
} from "./generators/javascript/request.js";

// backwards compatibility aliases
export { toJavaScript as toBrowser } from "./generators/javascript/javascript";
export { toNode as toNodeFetch } from "./generators/javascript/javascript";
export { toJavaScriptWarn as toBrowserWarn } from "./generators/javascript/javascript";
export { toNodeWarn as toNodeFetchWarn } from "./generators/javascript/javascript";

export { CCError } from "./utils";
export type { Warnings } from "./Warnings";
