let newLine = '\n';

async function sendToTelegram(message) {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'User-Agent': 'Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: message,
      parse_mode: 'Markdown',
      disable_web_page_preview: false,
      disable_notification: false,
      reply_to_message_id: null,
      chat_id: '@nearkulikovae',
    }),
  };

  const response = await fetch(
    'https://api.telegram.org/bot5621198298:AAFvCLCvzFZDQ-RBxiRPao8BFH9jYjiXFYk/sendMessage',
    options,
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return response;
}

export function sendBuyMessageToTelegram(name, email, telegramId, course, txHash) {
  let telegramMessage =
    '🥳 🤑 Покупка курса 🥳 🤑 :' +
    newLine +
    'Имя ' +
    name +
    newLine +
    'Почта ' +
    email +
    newLine +
    'Телеграмм ' +
    telegramId +
    newLine +
    'Курс ' +
    course +
    newLine +
    'Хэш транзакции ' +
    txHash +
    newLine +
    '🔥 🚀';

  sendToTelegram(telegramMessage);
}

export function sendContactMeMessageToTelegram(name, question) {
  let telegramMessage =
    '🚨 🤓 👨‍💻 Привет, заинтересовался вашим курсом, свяжитесь со мной: 🍑' +
    name +
    ' 🍑' +
    newLine +
    '❓❓❓ У меня возник следующий вопрос: ' +
    question +
    ' ❓ ❓ ❓' +
    newLine +
    '💥 🔥 🚀';

  sendToTelegram(telegramMessage);
}
