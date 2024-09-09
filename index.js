const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7253329480:AAGh4l88imb_fL5yt7RGoQdLd3kH82W7h9Y"; // Use your bot token
const webhookUrl = "https://i-ai-swipe.vercel.app/api/webhook"; // Replace with your Vercel webhook URL

const bot = new TelegramBot(TOKEN, { polling: false });

bot.setWebHook(webhookUrl).then(() => {
    console.log("Webhook set successfully.");
}).catch(err => {
    console.error("Error setting webhook:", err);
});
