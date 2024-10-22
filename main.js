require('dotenv').config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;
const photoUrl = process.env.PHOTO_URL; // Ambil URL dari .env
const options = {
    polling: true
};

const BotGempa = new TelegramBot(token, options);

// Log to indicate the bot is running
console.log("Bot Gempa is running...");

// Endpoint for earthquake data
const earthquakeAPI = "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json";

// Variable to hold the latest earthquake data
let latestEarthquakeData = null;

// Function to fetch the latest earthquake data
async function fetchEarthquakeData() {
    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(earthquakeAPI);
        const data = await response.json();
        latestEarthquakeData = data.Infogempa && data.Infogempa.gempa ? data.Infogempa.gempa : null;
    } catch (error) {
        console.error("Error fetching earthquake data:", error);
        latestEarthquakeData = null;
    }
}

// Initial fetch of earthquake data
fetchEarthquakeData();

BotGempa.on("message", async (msg) => {
    const chatId = msg.chat.id;

    // Handling /start command
    if (msg.text.toLowerCase() === "/start") {
        const userFirstName = msg.from.first_name; // Get the user's first name
        const welcomeMessage = `👋 Halo, ${userFirstName}! Saya di sini untuk memberi informasi tentang gempa bumi. Ketik /gempa untuk mendapatkan informasi terbaru tentang gempa bumi!`;
        await BotGempa.sendMessage(chatId, welcomeMessage);
        return;
    }

    // Handling /reload command
    if (msg.text.toLowerCase() === "/reload") {
        await fetchEarthquakeData();
        if (latestEarthquakeData) {
            await BotGempa.sendMessage(chatId, "✅ Data gempa telah diperbarui!");
        } else {
            await BotGempa.sendMessage(chatId, "⚠️ Terjadi kesalahan saat memperbarui data gempa.");
        }
        return;
    }

    // Handling /gempa command
    if (msg.text.toLowerCase() === "/gempa") {
        if (latestEarthquakeData) {
            const { Tanggal, Jam, Magnitude, Wilayah, Lintang, Bujur, Kedalaman, Dirasakan } = latestEarthquakeData;

            const message = `🌍 Gempa bumi hari ini:\n` +
                            `📅 Tanggal: ${Tanggal}\n` +
                            `🕒 Jam: ${Jam}\n` +
                            `📊 Magnitude: ${Magnitude}\n` +
                            `📍 Wilayah: ${Wilayah}\n` +
                            `🌐 Lintang: ${Lintang}\n` +
                            `🌐 Bujur: ${Bujur}\n` +
                            `🔻 Kedalaman: ${Kedalaman}\n` +
                            `💬 Dirasakan: ${Dirasakan}\n`;
            
            // Mengirim foto dan pesan
            await BotGempa.sendPhoto(chatId, photoUrl, { caption: message });
        } else {
            await BotGempa.sendMessage(chatId, "❌ Tidak ada gempa bumi hari ini.");
        }
    }
});
