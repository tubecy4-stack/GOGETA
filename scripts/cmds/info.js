const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
 config: {
  name: "info",
 aliases: ["owner", "botinfo" ],
  version: "1.0",
  author: "Chitron Bhattacharjee",
  countDown: 20,
  role: 0,
  shortDescription: { vi: "", en: "" },
  longDescription: { vi: "", en: "" },
  category: "owner",
  guide: { en: "" },
  envConfig: {}
 },
 onStart: async function ({ message }) {
  const authorName = "Sexy Rocky";
  const ownAge = "『20』";
  const messenger = " https://www.facebook.com/ibna.saad.66168
  const authorFB = " https://www.facebook.com/ibna.saad.66168
  const authorNumber = "+8801717135872";
  const Status = "⩸____⩸";
  const urls = [
"https://imgur.com/RW1P8A3",
"https://imgur.com/RW1P8A3"
];
  const link = urls[Math.floor(Math.random() * urls.length)];
  const now = moment().tz('Asia/Jakarta');
  const date = now.format('MMMM Do YYYY');
  const time = now.format('h:mm:ss A');
  const uptime = process.uptime();
  const seconds = Math.floor(uptime % 60);
  const minutes = Math.floor((uptime / 60) % 60);
  const hours = Math.floor((uptime / (60 * 60)) % 24);
  const days = Math.floor(uptime / (60 * 60 * 24));
  const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

  message.reply({
   body: `✨《 𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 》🎀
\🤖彡𝐵𝑜𝑡 𝑁𝑎𝑚𝑒 : ${global.GoatBot.config.nickNameBot}
\👾彡𝐵𝑜𝑡 𝑆𝑦𝑠𝑡𝑒𝑚 𝑃𝑟𝑒𝑓𝑖𝑥 : ${global.GoatBot.config.prefix}
\💙彡𝑂𝑤𝑛𝑒𝑟 𝑁𝑎𝑚𝑒 : ${Ibne Saad}
\📝彡𝐴𝑔𝑒 : ${18}
\💕彡𝑅𝑒𝑙𝑎𝑡𝑖𝑜𝑛𝑆ℎ𝑖𝑝: ${Single}
\🌐彡𝑊𝑝 : ${01717135872}
\🌍彡𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝐿𝑖𝑛𝑘 : ${https://www.facebook.com/ibna.saad.66168}
\🗓彡𝐷𝑎𝑡𝑒 : ${date}
\⏰彡𝑁𝑜𝑤 𝑇𝑖𝑚𝑒 : ${time}
\📛彡𝐵𝑜𝑡 𝐼𝑠 𝑅𝑢𝑛𝑛𝑖𝑛𝑔 𝐹𝑜𝑟 : ${uptimeString}
\===============`,
   attachment: await global.utils.getStreamFromURL(link)
  });
 },
 onChat: async function ({ event, message, getLang }) {
  if (event.body && event.body.toLowerCase() === "info") {
   this.onStart({ message });
  }
 }
};
