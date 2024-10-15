---

# BotCekGempaBumi

**BotCekGempaBumi** adalah sebuah bot Telegram yang dirancang untuk memberikan informasi terkini mengenai gempa bumi di Indonesia. Bot ini dibangun menggunakan Node.js dan memanfaatkan API dari [BMKG](https://data.bmkg.go.id) untuk mendapatkan data gempa yang akurat dan real-time.

## Fitur Utama

- **Informasi Gempa Terkini**: Bot ini memberikan informasi terkini mengenai gempa bumi yang terjadi di Indonesia, termasuk waktu, lokasi, dan magnitudo.
- **Notifikasi Otomatis**: Pengguna dapat menerima notifikasi otomatis ketika terjadi gempa bumi dengan magnitudo tertentu.
- **Data Lengkap**: Menggunakan API BMKG untuk mengakses data resmi dan terpercaya mengenai kejadian gempa.

## Teknologi yang Digunakan

- **Node.js**: Digunakan sebagai runtime untuk menjalankan bot.
- **Telegram Bot API**: Memungkinkan interaksi dengan pengguna melalui platform Telegram.
- **Axios**: Digunakan untuk melakukan permintaan HTTP ke API BMKG dan mengelola respons data.

## Cara Kerja

1. Bot akan menerima permintaan dari pengguna melalui Telegram.
2. Ketika pengguna meminta informasi tentang gempa, bot akan melakukan permintaan ke API BMKG.
3. Data yang diterima dari API akan diolah dan dikirimkan kembali kepada pengguna dalam format yang mudah dipahami.

## Instalasi

Untuk menjalankan **BotCekGempaBumi** di VPS, ikuti langkah-langkah di bawah ini:

1. Clone repositori.
2. Instal dependensi dengan `npm install`.
3. Buat file `.env` untuk menyimpan token bot Telegram.
4. Jalankan bot menggunakan `node nama_file_bot.js`.

## Kesimpulan

Dengan **BotCekGempaBumi**, pengguna dapat dengan mudah mendapatkan informasi terkini mengenai gempa bumi di Indonesia secara praktis melalui Telegram. Bot ini memanfaatkan sumber data resmi dari BMKG, memastikan akurasi dan keandalan informasi yang diberikan.

---

```markdown
# Deployment Bot Telegram di VPS

Panduan ini menjelaskan langkah-langkah untuk mendepoy bot Telegram menggunakan Node.js di VPS.

## Prasyarat

- VPS dengan Ubuntu 22
- Akses SSH ke VPS
- Token bot Telegram (dapat diperoleh dari [BotFather](https://t.me/botfather))

## Langkah-langkah

### 1. Akses VPS

Masuk ke VPS melalui SSH:

```bash
ssh username@your_vps_ip
```

Gantilah `username` dan `your_vps_ip` dengan informasi yang sesuai.

### 2. Perbarui dan Instalasi Dependensi

Perbarui sistem dan instal `screen`, `git`, dan `Node.js`:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install screen git -y
```

Instal Node.js dan npm:

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs
```

Verifikasi instalasi:

```bash
node -v
npm -v
```

### 3. Clone Repositori

Clone repositori bot Telegram:

```bash
git clone https://github.com/ZidanAlfarizaPutraPratama/BotTelegramCekGempaBumi.git
cd BotTelegramCekGempaBumi
```

### 4. Instalasi Dependensi

Instal dependensi yang diperlukan:

```bash
npm install
```

### 5. Buat File `.env`

Buat file `.env` untuk menyimpan konfigurasi:

```bash
nano .env
```

Isi file `.env` dengan informasi berikut:

```env
BOT_TOKEN=YOUR_BOT_TOKEN
```

Gantilah `YOUR_BOT_TOKEN` dengan token yang diperoleh dari BotFather.

### 6. Menjalankan Bot Menggunakan `screen`

Buat sesi baru dengan `screen`:

```bash
screen -S bot_session
```

Jalankan bot:

```bash
node nama_file_bot.js
```

Gantilah `nama_file_bot.js` dengan nama file JavaScript yang sesuai.

### 7. Detaching dan Menyambung Kembali Sesi `screen`

- Untuk detach (keluar dari sesi) tanpa menghentikan proses, tekan `Ctrl + A`, kemudian `D`.
- Untuk menyambung kembali ke sesi yang sedang berjalan:

```bash
screen -r bot_session
```

### 8. Menghentikan Sesi `screen`

Jika perlu menghentikan sesi `screen`, gunakan:

```bash
screen -X -S bot_session quit
```

Gantilah `bot_session` dengan nama sesi yang sesuai.

### 9. Memeriksa Kesalahan

Jika mengalami kesalahan seperti `ETELEGRAM: 409 Conflict`, pastikan tidak ada lebih dari satu instance bot yang berjalan. Gunakan perintah berikut untuk memeriksa dan menghentikan proses:

```bash
ps aux | grep node
```

Hentikan proses yang tidak diinginkan dengan:

```bash
kill -9 PID
```

Gantilah `PID` dengan ID proses yang sesuai.

### 10. Catatan

- Pastikan untuk menjaga token dan informasi sensitif lainnya dengan aman.
- Jangan jalankan bot dengan lebih dari satu metode pengambilan pembaruan (polling atau webhook).

## Kesimpulan

Dengan mengikuti langkah-langkah di atas, bot Telegram kamu seharusnya sudah berjalan di VPS. Jika ada pertanyaan atau masalah, jangan ragu untuk menghubungi.
```
