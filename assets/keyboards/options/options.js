module.exports = {
  options: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Перейти на сайт", url: "https://www.sunsiyam.com" }],
        [{ text: "Telegram", url: "https://t.me//dariamoussa?text=hel", callback_data: "telegram" }],
        [{ text: "What's app", url: "https://wa.me/79161574739?text=Здравствуйте! мне нужен совет Сёма отправил меня сюда."}]
      ],
    }),
  },
};
