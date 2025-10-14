const axios = require("axios");
const fs = require("fs");
const path = require("path");

const mahmud = async () => {
  const response = await axios.get("https://raw.githubusercontent.com/mahmudx7/exe/main/baseApiUrl.json");
  return response.data.mahmud;
};

module.exports = {
  config: {
    name: "catvideo",
    aliases: ["catvid"],
    version: "1.7",
    role: 0,
    author: "MahMUD",
    category: "media",
    guide: {
      en: "Use {pn} to get a random cat video."
    }
  },

  onStart: async function ({ api, event, message }) {
    try {
      const loadingMessage = await message.reply("🐱 | 𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗿𝗮𝗻𝗱𝗼𝗺 𝗖𝗮𝘁 𝘃𝗶𝗱𝗲𝗼...𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁..!!");

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);

      const apiUrl = await mahmud();
      const res = await axios.get(`${apiUrl}/api/album/videos/cat?userID=${event.senderID}`);
      if (!res.data.success || !res.data.videos.length)
        return api.sendMessage("❌ | No videos found.", event.threadID, event.messageID);

      const url = res.data.videos[Math.floor(Math.random() * res.data.videos.length)];
      const filePath = path.join(__dirname, "temp_video.mp4");

      const video = await axios({
        url,
        method: "GET",
        responseType: "stream",
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });

      const writer = fs.createWriteStream(filePath);
      video.data.pipe(writer);

      writer.on("finish", () => {
        api.sendMessage({
          body: "✨ | 𝐇𝐞𝐫𝐞'𝐬 𝐲𝐨𝐮𝐫 𝐂𝐚𝐭 𝐯𝐢𝐝𝐞𝐨",
          attachment: fs.createReadStream(filePath)
        }, event.threadID, () => fs.unlinkSync(filePath), event.messageID);
      });

      writer.on("error", () => {
        api.sendMessage("❌ | Download error.", event.threadID, event.messageID);
      });
    } catch (e) {
      console.error("ERROR:", e);
      api.sendMessage("❌ | Failed to fetch or send video.", event.threadID, event.messageID);
    }
  }
};
