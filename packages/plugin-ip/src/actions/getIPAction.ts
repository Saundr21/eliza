import {
    ActionExample,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    type Action,
} from "@elizaos/core";
import axios from "axios";

export const getIpAction: Action = {
    name: "GET_IP",
    similes: ["IP"],
    validate: async (_runtime: IAgentRuntime, _message: Memory) => {
        return true;
    },
    description: "Get the current IP address of the user",
    handler: async (
        _runtime: IAgentRuntime,
        _message: Memory,
        _state: State,
        _options: { [key: string]: unknown },
        _callback: HandlerCallback
    ): Promise<boolean> => {
        const response = await axios.get("https://api.ipify.org?format=json");
        console.log("Current IP:", response.data.ip);

        _callback({
            text: `Current IP: ${response.data.ip}`,
        });

        return true;
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: { text: "What's my IP address?" },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "I'll check your IP address",
                    action: "GET_IP",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "Can you tell me my IP?" },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "Let me get your IP address",
                    action: "GET_IP",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "Show me my IP" },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "I'll show you your IP address",
                    action: "GET_IP",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "I need to know my IP address" },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "I'll look up your IP address",
                    action: "GET_IP",
                },
            },
        ],
    ] as ActionExample[][],
} as Action;
