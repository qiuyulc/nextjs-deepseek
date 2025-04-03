import { createDeepSeek } from '@ai-sdk/deepseek';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const deepseek = createDeepSeek({
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: process.env.BASE_URL,
  });

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: deepseek("deepseek-v3"),
    system: "You are a helpful assistant.",
    messages,
    onFinish: async(result) => {
        console.log(result);
    }
  });
  return result.toDataStreamResponse();
}