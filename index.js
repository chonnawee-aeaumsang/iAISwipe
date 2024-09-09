const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7516525828:AAHf5q3wENV2V9iu-6cmTpYtiM4nPXZGM20"; // Replace with your bot token
const webhookUrl = "https://iai-game.vercel.app/api/webhook"; // Replace with your Vercel webhook URL

const bot = new TelegramBot(TOKEN);

bot.setWebHook(webhookUrl).then(() => {
    console.log("Webhook set successfully.");
}).catch(err => {
    console.error("Error setting webhook:", err);
});
