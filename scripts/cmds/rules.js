module.exports.config = {
  name: "rules",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamic Cyber",
  description: "Important notes and group rules",
  commandCategory: "information",
  usages: "",
  cooldowns: 5,
  dependencies: {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const request = global.nodemodule.request;
  const fs = global.nodemodule["fs-extra"];
  
  var imageLinks = ["https://i.imgur.com/NuQMY5X.jpeg"];
  var imagePath = __dirname + "/cache/rulesImage.jpg";
  
  var sendMessage = () => api.sendMessage({
    body: `⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆
•—»✨ আসসালামু আলাইকুম 🖤💫

•—»✨ এটি একটি ইসলামিক গ্রুপ এবং আমি একটি ইসলামিক রোবোট 🤖🕋
এই ইসলামিক গ্রুপের কিছু নিয়ম কানুন আছে যা হয়তো অনেকের জানা নেই। নিচে পয়েন্ট আকারে সেই নিয়মগুলো দেওয়া হলো:

⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆

🕋 [১] যেহেতু এটি একটি ইসলামিক গ্রুপ, তাই কোনো প্রকার খারাপ ভাষা ব্যবহার করা যাবে না

🕋 [২] পর্ণোগ্রাফি কিংবা অশ্লীল ভিডিও দেওয়া যাবে না

🕋 [৩] ইসলামিক গ্রুপে থাকার জন্য আল্লাহর শুকরিয়া করুন এবং সবাইকে সম্মান দিন

🕋 [৪] বড় কিংবা ছোট কাউকে ছোট করে কথা বলা যাবে না

🕋 [৫] এখানে ইসলামের বাইরে কোনো কথা বলা যাবে না

🕋 [৬] এডমিন অনেক কষ্ট করে গ্রুপ ও রোবট বানিয়েছে, এডমিনকে সম্মান করুন

🕋 [৭] বট সম্পর্কিত কোনো সমস্যা থাকলে এডমিনকে ইনবক্স করুন

🕋 [৮] এখানে ঝগড়া করা সম্পূর্ণ নিষেধ

🕋 [৯] এই গ্রুপে ইসলামিক রোবট ছাড়া অন্য কোনো রোবট অ্যাড করা যাবে না

🕋 [১০] ১৮+ কন্টেন্ট নিয়ে আলোচনা করলে সাথে সাথে গ্রুপ থেকে বের করে দেওয়া হবে

🕋 [১১] সকল ধর্মের লোক এখানে থাকতে পারবে, কিন্তু কারো ধর্ম নিয়ে কাউকে ছোট করা যাবে না

🕋 [১২] একই ইমোজি বার বার পাঠানো থেকে বিরত থাকুন

🕋 [১৩] এডমিনের অনুমতি ছাড়া গ্রুপের নাম বা স্ট্যাটাস পরিবর্তন করা যাবে না

🕋 [১৪] গ্রুপে কোনো স্প্যাম মেসেজ করা যাবে না

🕋 [১৫] গ্রুপে কোনো ফিশিং লিংক বা ক্ষতিকর লিংক দেওয়া যাবে না

⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆

❤️🌸 প্রিয় মুসলিম ভাই/বোন, তোমাদের জন্য এই ইসলামিক গ্রুপ এবং রোবট বানানো হয়েছে। আল্লাহকে ভালোবেসে এই গ্রুপের নিয়মগুলো মেনে চলুন।

⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆

৫ ওয়াক্ত নামাজ পড়ুন এবং আল্লাহকে ডাকুন। কিয়ামতের দিন শুধুমাত্র আল্লাহই আপনাকে জাহান্নামের আগুন থেকে রক্ষা করতে পারবেন।

⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆

তোমাদের জন্য দোয়া রইলো, প্রিয় গ্রুপ মেম্বাররা! ❤️🤲

⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆`,
    attachment: fs.createReadStream(imagePath)
  }, event.threadID, () => fs.unlinkSync(imagePath), event.messageID);
  
  return request(encodeURI(imageLinks[Math.floor(Math.random() * imageLinks.length)]))
    .pipe(fs.createWriteStream(imagePath))
    .on("close", () => sendMessage());
};