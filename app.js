const express = require('express');
const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`-----------------------------------------`);
    console.log(`Server berhasil dijalankan!`);
    console.log(`Akses lokal: http://localhost:${PORT}`);
    // Hapus tanda < > agar alamatnya bersih
    console.log(`Akses via HP: http://192.168.1.12:${PORT}`); 
    console.log(`-----------------------------------------`);
});