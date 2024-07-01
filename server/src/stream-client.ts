import { StreamClient } from "@stream-io/node-sdk";

const apiKey = ""; // write apikey from Stream profile
const apiSecret = ""; // write apisecret from Stream profile

export const client = new StreamClient(apiKey, apiSecret);
