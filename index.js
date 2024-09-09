const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7498251188:AAGkKHnIgMpfAwQwr3Ygu0h6uzAcHyK89-8"; // Replace with your bot token
const webhookUrl = "https://i-ai-swipe.vercel.app/api/webhook"; // This should match your deployed function URL

const bot = new TelegramBot(TOKEN);

bot.setWebHook(webhookUrl).then(() => {
    console.log("Webhook set successfully.");
}).catch(err => {
    console.error("Error setting webhook:", err);
});

