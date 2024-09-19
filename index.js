const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7915533040:AAHR8vzx9GXIuTaCTC1Y1yo3Boxak6GkCQs"; // Replace with your bot token
const webhookUrl = "https://bot-message-five.vercel.app/api/webhook"; // This should match your deployed function URL

const bot = new TelegramBot(TOKEN, { polling: false });

bot.setWebHook(webhookUrl).then(() => {
    console.log("Webhook set successfully.");
}).catch(err => {
    console.error("Error setting webhook:", err);
});

