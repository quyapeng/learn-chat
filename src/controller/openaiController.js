import { Configuration, OpenAIApi } from "openai";
export class OpenAiController {
  constructor(ctx) {
    //
    this.ctx = ctx;

    this.config = new Configuration({
      apiKey: process.env.OPEN_API_KEY,
    });
    this.openai = new OpenAIApi(config);
  }

  async generateImage() {
    const { prompt, n, size } = this.ctx.request.body;
    const { data } = this.openai.createImage({
      prompt,
      n,
      size,
    });
  }
}
