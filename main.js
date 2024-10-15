require('dotenv').config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;
const options = {
    polling: true
};

const BotGempa = new TelegramBot(token, options);

// Log to indicate the bot is running
console.log("Bot Gempa is running...");

// Endpoint for earthquake data
const earthquakeAPI = "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json";

BotGempa.on("message", async (msg) => {
    const chatId = msg.chat.id;

    if (msg.text.toLowerCase() === "/gempa") {
        try {
            // Dynamically import fetch
            const fetch = (await import('node-fetch')).default;
            const response = await fetch(earthquakeAPI);
            const data = await response.json();
            
            // Check if the data contains the expected structure
            if (data.InformasiGempa && data.InformasiGempa.length > 0) {
                let message = "Gempa bumi hari ini:\n";
                data.InformasiGempa.forEach(earthquake => {
                    const { Magnitude, Wilayah, Waktu } = earthquake;
                    message += `Magnitude: ${Magnitude}, Location: ${Wilayah}, Time: ${new Date(Waktu).toLocaleString()}\n`;
                });
                BotGempa.sendMessage(chatId, message);
            } else {
                BotGempa.sendMessage(chatId, "Tidak ada gempa bumi hari ini.");
            }
        } catch (error) {
            console.error("Error fetching earthquake data:", error);
            BotGempa.sendMessage(chatId, "Terjadi kesalahan saat mengambil data gempa.");
        }
    }
});
