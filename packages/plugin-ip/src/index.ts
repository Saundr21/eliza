import { Plugin } from "@elizaos/core";
import { getIpAction } from "./actions/getIPAction";
export * as actions from "./actions";
export * as providers from "./providers";

export const ipPlugin: Plugin = {
    name: "ip",
    description: "Agent ip with basic actions and evaluators",
    actions: [getIpAction],
};
