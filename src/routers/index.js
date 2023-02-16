import KoaRouter from "koa-router";
import { Configuration, OpenAIApi } from "openai";

export const router = new KoaRouter();
router.get("/generateImage", async (ctx) => {
  const config = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
  });
  const openai = new OpenAIApi(config);
  const result = await openai.createImage({
    prompt: "a white cat",
    n: 1,
    size: "256x256",
  });
  // Configure
  const imageUrl = response.data.data[0].url;

  ctx.body = {
    state: "ok",
    data: imageUrl,
  };
});
