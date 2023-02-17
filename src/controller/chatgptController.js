import { ChatGPTAPI } from "chatgpt";

export class ChatgptController {
  constructor(ctx) {
    this.ctx = ctx;
    this.api = new ChatGPTAPI({
      sessionToken: "123",
    });
  }

  async conversation(question) {
    // 提问 eventStream
    const result = await this.api.sendMessage(question);
    console.log(result);
  }
}
