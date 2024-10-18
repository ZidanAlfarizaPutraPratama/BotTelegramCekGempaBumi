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
            if (data.Infogempa && data.Infogempa.gempa) {
                const earthquake = data.Infogempa.gempa;
                const { Tanggal, Jam, Magnitude, Wilayah, Lintang, Bujur, Kedalaman, Dirasakan } = earthquake;
                
                const message = `Gempa bumi hari ini:\n` +
                                `Tanggal: ${Tanggal}\n` +
                                `Jam: ${Jam}\n` +
                                `Magnitude: ${Magnitude}\n` +
                                `Wilayah: ${Wilayah}\n` +
                                `Lintang: ${Lintang}\n` +
                                `Bujur: ${Bujur}\n` +
                                `Kedalaman: ${Kedalaman}\n` +
                                `Dirasakan: ${Dirasakan}\n`;
                
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
