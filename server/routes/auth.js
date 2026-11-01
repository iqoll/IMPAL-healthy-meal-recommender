// server/routes/auth.js
const express = require('express');
const router = express.Router();
// Asumsi menggunakan query builder atau ORM sederhana
const db = require('../database/connection'); 

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Mengecek email dan password di tabel pengguna
    const [user] = await db.query(
      'SELECT id_pengguna, nama FROM pengguna WHERE email = ? AND password_hash = ?', 
      [email, password]
    );

    if (user.length > 0) {
      res.status(200).json({ status: 'success', data: user[0] });
    } else {
      res.status(401).json({ status: 'error', message: 'Email atau password salah' });
    }
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Terjadi kesalahan server' });
  }
});

module.exports = router;