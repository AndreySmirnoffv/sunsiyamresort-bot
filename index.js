require("dotenv").config({ path: "./assets/modules/.env" });
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot( process.env.devStatus ? process.env.tokenTest : process.env.tokenDefault, { polling: true });
const { options } = require("./assets/keyboards/options/options");
const users = require("./assets/data/user.json");

bot.on("message", async (msg) => {
    if (msg.text === "/start") {
    let user = users.filter(x => x.chat_id === msg.chat.id)[0];
    if (!user) {
      users.push({
        chat_id: msg.chat.id,
      });
      require('fs').writeFileSync("./assets/data/user.json",JSON.stringify(users, null, "\t"));
    }
    await bot.sendMessage(msg.chat.id, `Добрый день ${msg.from.first_name} ${msg.from.last_name}! Я-Сёма, Ваш помощник. Я еще не много умею, но уже могу:`,options);
  }
});

bot.on("callback_query", async (msg) => {
  if (msg.data === "telegram"){
    await bot.sendMessage(msg.message.chat.id, "Скопируйте имя пользователя @dariamoussa и вставьте его перейдя по ссылке. \n https://t.me/share/url?url=https://t.me/Vladimir003&text=Привет")
  }
});

bot.on("polling_error", console.log);
