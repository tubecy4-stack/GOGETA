module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
    description: "mention",
    commandCategory: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100001039692046") {
    var aid = ["100001039692046"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["আসসালামুয়ালাইকুম কিছু বলতে হলে বসের ইনবক্সে গিয়ে বলুন 🥰", "আসসালামুয়ালাইকুম বস এখন ব্যস্ত আছে কি বলবেন আমাকে বলুন", "আসসালামুয়ালাইকুম বসকে মেনশন দিয়ে লাভ নেই তিনি এখন কাজ করতেছেন", "আসসালামু আলাইকুম কিছু কি বলবেন আমার বস এখন বাইরে গেছে", "ইনবক্সে চলে যান গ্রুপে মেনশন করে লাভ নেই", "আসসালামু আলাইকুম কি বলবেন ভাই আমাকে বলেন"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
                 }
