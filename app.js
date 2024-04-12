const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ success: true, message: 'is running' });
});

// Rute untuk mengembalikan hasil success
app.get('/success', (req, res) => {
  res.json({ success: true, message: 'Request was successful' });
});

// Menjalankan server pada port tertentu
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});