const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.BOT_TOKEN;
const gameName = "iAIRobotGame"; // Replace with your game's short name
const gameUrl = "https://i-ai-swipe.vercel.app/"; // Your game URL

const bot = new TelegramBot(TOKEN, { polling: false });

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const update = req.body;

        // Handle /start or /game command
        if (update.message && (update.message.text === '/start' || update.message.text === '/game')) {
            try {
                await bot.sendGame(update.message.from.id, gameName);
                res.status(200).send('OK');
            } catch (error) {
                console.error("Error sending game:", error);
                res.status(500).send('Error sending game');
            }
        }

        // Handle callback query for the Play button
        if (update.callback_query) {
            if (update.callback_query.game_short_name !== gameName) {
                await bot.answerCallbackQuery(update.callback_query.id, `Sorry, '${update.callback_query.game_short_name}' is not available.`);
            } else {
                await bot.answerCallbackQuery({
                    callback_query_id: update.callback_query.id,
                    url: gameUrl, // Send the game URL when Play button is clicked
                });
            }
        }

        res.status(200).send('OK');
    } else {
        res.status(405).send('Method Not Allowed');
    }
};
