import { Plugin } from "@elizaos/core";
import { startAnyone } from "./actions/startAnyone.ts";
import { stopAnyone } from "./actions/stopAnyone.ts";
export * as actions from "./actions";
export * as providers from "./providers";

export const anyonePlugin: Plugin = {
    name: "anyone",
    description: "Agent anyone with basic actions and evaluators",
    actions: [startAnyone, stopAnyone],
};
