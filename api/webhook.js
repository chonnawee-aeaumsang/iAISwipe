const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "YOUR_BOT_TOKEN";  // Use your bot token
const gameName = "iAIRobotSwipe"; // Game short name
const gameUrl = "https://i-ai-swipe.vercel.app/"; // Game URL

const bot = new TelegramBot(TOKEN, { polling: false });  // We don't need polling because we're using a webhook

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const update = req.body;

        // Handle '/start' or '/game' command
        if (update.message && (update.message.text === '/start' || update.message.text === '/game')) {
            await bot.sendGame(update.message.chat.id, gameName);
        }

        // Handle callback query for the game
        if (update.callback_query) {
            if (update.callback_query.game_short_name !== gameName) {
                await bot.answerCallbackQuery(update.callback_query.id, {
                    text: `Sorry, the game '${update.callback_query.game_short_name}' is not available.`,
                    show_alert: true
                });
            } else {
                await bot.answerCallbackQuery({
                    callback_query_id: update.callback_query.id,
                    url: gameUrl,  // Send the user to the game URL
                });
            }
        }

        res.status(200).send('OK');
    } else {
        res.status(405).send('Method Not Allowed');
    }
};
