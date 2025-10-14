module.exports.config = {
  name: "hi",
  version: "3.0.0",
  hasPermssion: 0,
  credits: "Sam, modified by Arun(ind time)",
  description: "Auto reply on greetings",
  commandCategory: "Auto Reply",
  usages: "No prefix",
  cooldowns: 0
};

module.exports.handleEvent = async ({ event, api, Users }) => {
  const KEY = [
    "hi", "hy", "hello", "hlo", "hlw", "hyy", "gm", "gn",
    "good morning", "good afternoon", "good night", "gd night"
  ];

  // If message doesn't match any keyword, stop
  if (!KEY.includes(event.body?.toLowerCase())) return;

  const data = [
    "526214684778630","526220108111421","526220308111401","526220484778050","526220691444696","526220814778017",
    "526220978111334","526221104777988","526221318111300","526221564777942","526221711444594","526221971444568",
    "2041011389459668","2041011569459650","2041011726126301","2041011836126290","2041011952792945","2041012109459596",
    "2041012262792914","2041012406126233","2041012539459553","2041012692792871","2041014432792697","2041014739459333",
    "2041015016125972","2041015182792622","2041015329459274","2041015422792598","2041015576125916","2041017422792398",
    "2041020049458802","2041020599458747","2041021119458695","2041021609458646","2041022029458604","2041022286125245"
  ];
  const sticker = data[Math.floor(Math.random() * data.length)];

  const moment = require("moment-timezone");
  const hours = parseInt(moment.tz('Asia/Kolkata').format('HHmm'));

  // Random replies by time slot
  const replies = {
    midnight: [
      "😏 Itni raat ko jag rahe ho, ghost hunting chal rahi kya?",
      "🌙 Arre baba so jao, warna kal office me murga banoge!",
      "😂 Raat ke 2 baje aur tum 'hi' bol rahe ho… vampire mode on?",
      "😴 Neend nahi aa rahi ya Netflix khatam ho gaya?",
      "👻 3 baje bhoot ka shift start hota hai… careful!"
    ],
    morning: [
      "☀️ Good Morning baby! Uthi ya abhi bhi alarm se lad rahi ho?",
      "🌼 Subah ka sunshine aur tumhari smile, perfect combo 😍",
      "🌞 Good morning! Jaldi nashta karo, chai thandi ho jayegi",
      "🍵 Morning vibes! Chai pilo aur fresh ho jao",
      "😴 Aaj subah tum kaafi cute lag rahi ho… neend ke sath 😆"
    ],
    afternoon: [
      "🍛 Good Afternoon! Lunch hua ya abhi bhi mobile me busy ho?",
      "😋 Khana khaya? Nahi to abhi order kar lo swiggy se!",
      "🌞 Afternoon naps are the best… try karo",
      "🥱 Dopahar me tum itne lazy kyu lagte ho?",
      "🍹 Lunch ke baad thoda relax karo, health important hai"
    ],
    evening: [
      "🌆 Good Evening! Chai coffee le lo mood fresh ho jayega",
      "🌇 Evening vibes + tum = perfect combo 😍",
      "☕ Chai ka time aa gaya, aaj meri taraf se virtual chai",
      "😌 Kaise ho? Aaj ka din kaisa gaya?",
      "🌤️ Thodi walk kar lo, evening ka weather mast hai"
    ],
    night: [
      "🌙 Dinner hua? Nahi to mujhe bula lo cooking ke liye 😏",
      "🍽️ Good Night dinner ke baad! Ab thoda relax karo",
      "😴 Dinner ke sath mobile mat chhodo warna indigestion ho jayega",
      "🌌 Raat ka time = gossip time 😆",
      "😚 Sweet dreams ke pehle thoda baat kar lete hain"
    ]
  };

  let category;
  if (hours >= 0 && hours <= 400) category = replies.midnight;
  else if (hours > 400 && hours <= 1200) category = replies.morning;
  else if (hours > 1200 && hours <= 1500) category = replies.afternoon;
  else if (hours > 1600 && hours <= 2100) category = replies.evening;
  else if (hours > 2100 && hours <= 2400) category = replies.night;
  else category = ["🤔 Time error!"];

  const session = category[Math.floor(Math.random() * category.length)];
  const name = await Users.getNameUser(event.senderID);

  const msg = { body: `💝Hi ${name}, ${session}`, mentions: [{ tag: name, id: event.senderID }] };

  api.sendMessage(msg, event.threadID, (e, info) => {
    setTimeout(() => api.sendMessage({ sticker }, event.threadID), 100);
  }, event.messageID);
};
