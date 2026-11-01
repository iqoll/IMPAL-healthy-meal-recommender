// Jalankan: node database/seed-demo.js
// Script ini mengupdate password hash akun demo ke bcrypt yang valid

const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
require('dotenv').config();

async function seed() {
  const conn = await mysql.createConnection({
    host:     process.env.DB_HOST     || '127.0.0.1',
    port:     Number(process.env.DB_PORT) || 3306,
    user:     process.env.DB_USER     || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME     || 'maseh_db',
  });

  try {
    const hash = await bcrypt.hash('password123', 10);
    console.log('Hash yang akan disimpan:', hash);

    await conn.query(
      `INSERT INTO pengguna (id_pengguna, nama, email, password_hash)
       VALUES ('demo-user-0001-0000-000000000001', 'Haiqal Demo', 'demo@example.com', ?)
       ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash)`,
      [hash]
    );

    // Verifikasi
    const [rows] = await conn.query('SELECT email, password_hash FROM pengguna WHERE email = ?', ['demo@example.com']);
    const stored = rows[0].password_hash;
    const ok = await bcrypt.compare('password123', stored);
    console.log('Hash valid?', ok);
    console.log('✅ Seed selesai. Akun demo: demo@example.com / password123');
  } finally {
    await conn.end();
  }
}

seed().catch(console.error);
