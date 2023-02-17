import KoaRouter from "koa-router";
import { OpenAiController } from "../controller/openaiController.js";
import { ChatgptController } from "../controller/chatgptController.js";
export const router = new KoaRouter();
router.post("/generateImage", async (ctx) => {
  const openaiController = new OpenAiController(ctx);
  await openaiController.generateImage();
  // const { prompt } = ctx.response.body;
  // const config = new Configuration({
  //   apiKey: process.env.OPEN_API_KEY,
  // });
  // const openai = new OpenAIApi(config);
  // const result = await openai.createImage({
  //   prompt: "a white cat",
  //   n: 1,
  //   size: "256x256",
  // });
  // Configure
  // const imageUrl = result.data.data[0].url;

  // ctx.body = {
  //   state: "ok",
  //   data: "123",
  // };
});

router.post();
