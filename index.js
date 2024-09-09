const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7049395551:AAE2TlFSk1oGcW0h5FQCMPEM40e9Xa_W_xg"; // Replace with your bot token
const webhookUrl = "https://i-ai-swipe.vercel.app/api/webhook"; // This should match your deployed function URL

const bot = new TelegramBot(TOKEN);

bot.setWebHook(webhookUrl).then(() => {
    console.log("Webhook set successfully.");
}).catch(err => {
    console.error("Error setting webhook:", err);
});

