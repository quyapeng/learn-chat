import { ChatGPTAPI } from "chatgpt";

export class ChatGPTController {
  constructor(ctx) {
    this.ctx = ctx;
    this.api = new ChatGPTAPI({
      sessionToken: "123",
    });
  }

  async conversation(question) {
    // 提问 eventStream
    const { question } = this.ctx.request.body;
    const answer = await this.api.sendMessage(question + "这句话什么意思");
    console.log(result);
    this.ctx.body = {
      state: "ok",
      data: answer,
    };
  }
}
