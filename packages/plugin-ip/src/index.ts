import { Plugin } from "@elizaos/core";
import { getIpAction } from "./actions/getIpAction.ts";

export * as actions from "./actions";
export * as providers from "./providers";

export const ipPlugin: Plugin = {
    name: "ip",
    description: "Get the current IP address of the user",
    actions: [getIpAction],
};
