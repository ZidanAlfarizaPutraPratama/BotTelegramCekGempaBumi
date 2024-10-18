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
