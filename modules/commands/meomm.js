module.exports.config = {
  name: "autoMeow",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "leminhhoang",
  descrmodule.exports.config = {
      name: "autoMeow",
      version: "1.0.0",
      hasPermssion: 0,
      credits: "leminhhoang",
      description: "Tự động trả lời khi có chữ 'ai cte nhất'",
      commandCategory: "Auto-reply",
      usages: "Không cần gõ lệnh",
      cooldowns: 0
    };

    module.exports.handleEvent = async ({ api, event }) => {
      const { body, threadID, messageID } = event;
      if (!body) return;

      // Chuyển tin nhắn về chữ thường cho dễ so sánh
      const msg = body.toLowerCase();

      // Nếu tin nhắn chứa "ai cte nhất"
      if (msg.includes("ai cte nhất")) {
        return api.sendMessage("meow", threadID, messageID);
      }
    };

    module.exports.run = async () => {
      // Lệnh này không cần run, vì nó hoạt động tự động
      return;
    };
iption: "Tự động trả lời khi có chữ 'ai cte nhất'",
  commandCategory: "Auto-reply",
  usages: "Không cần gõ lệnh",
  cooldowns: 0
};

module.exports.handleEvent = async ({ api, event }) => {
  const { body, threadID, messageID } = event;
  if (!body) return;

  // Chuyển tin nhắn về chữ thường cho dễ so sánh
  const msg = body.toLowerCase();

  // Nếu tin nhắn chứa "ai cte nhất"
  if (msg.includes("ai cte nhất")) {
    return api.sendMessage("meow", threadID, messageID);
  }
};

module.exports.run = async () => {
  // Lệnh này không cần run, vì nó hoạt động tự động
  return;
};
