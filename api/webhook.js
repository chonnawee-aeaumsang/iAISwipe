const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7049395551:AAE2TlFSk1oGcW0h5FQCMPEM40e9Xa_W_xg"; // Replace with your bot token
const gameName = "iAISwiper"; // Replace with your game's short name
const gameUrl = "https://i-ai-swipe.vercel.app/"; // Replace with your game URL

const bot = new TelegramBot(TOKEN);

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const update = req.body;

        // Process the update
        if (update.message && (update.message.text === '/start' || update.message.text === '/game')) {
            await bot.sendGame(update.message.from.id, gameName);
        }

        if (update.callback_query) {
            if (update.callback_query.game_short_name !== gameName) {
                await bot.answerCallbackQuery(update.callback_query.id, `Sorry, '${update.callback_query.game_short_name}' is not available.`);
            } else {
                await bot.answerCallbackQuery({
                    callback_query_id: update.callback_query.id,
                    url: gameUrl,
                });
            }
        }

        res.status(200).send('OK');
    } else {
        res.status(405).send('Method Not Allowed');
    }
};
