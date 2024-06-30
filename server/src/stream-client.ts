import { StreamClient } from "@stream-io/node-sdk";

const apiKey = "5cbshunadgbw";
const apiSecret = "gu2mvuxawjn6kv6j8ckb4u2spm4s5reuq2uvyj8gqqz77rqwqqxeyb5vqvvwkuj8";

export const client = new StreamClient(apiKey, apiSecret);
