module.exports = {
  adminOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "добавить вопрос", callback_data: "addQuestion" }],
      ],
    }),
  },
};
