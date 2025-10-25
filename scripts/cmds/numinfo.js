const dipto = "https://www.noobs-api.rf.gd/dipto";
const axios = require("axios");

module.exports = {
  config: {
    name: "numinfo",
    credits: "Dipto",
    hasPermssion: 0,
    commandCategory: "Information",
    usages: "numinfo <number>",
    version: "1.0.0"
  },

  run: async function ({ api, event, args }) {
    if (!args[0]) return api.sendMessage("⚠️ দয়া করে একটি নম্বর দিন!", event.threadID, event.messageID);

    let number = args[0]?.startsWith("01") ? "88" + args[0] : args[0];

    api.setMessageReaction("⌛", event.messageID, () => {}, true);

    try {
      let { data } = await axios.get(`${dipto}/numinfo?number=${number}`);
      let msg = { body: data.info.map(i => `Name: ${i.name} \nType: ${i.type || "Not found"}`).join("\n") };

      if (data.image) 
        msg.attachment = (await axios.get(data.image, { responseType: "stream" })).data;

      api.sendMessage(msg, event.threadID, event.messageID);
    } catch (e) {
      api.sendMessage(`❌ Error: ${e.message}`, event.threadID, event.messageID);
      console.log(e);
    }
  }
};
