const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.BOT_TOKEN; ; // Replace with your bot token
const webhookUrl = "${process.env.VERCEL_URL}/api/webhook"; // This should match your deployed function URL

const bot = new TelegramBot(TOKEN, { polling: false });

bot.setWebHook(webhookUrl).then(() => {
    console.log("Webhook set successfully.");
}).catch(err => {
    console.error("Error setting webhook:", err);
});

