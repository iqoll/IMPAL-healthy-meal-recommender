// database/connection.ts
// Koneksi MySQL menggunakan mysql2 dengan Connection Pool

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// ============================================================
// Pool dibuat sekali saja dan di-reuse oleh seluruh aplikasi.
// Pool jauh lebih efisien daripada membuka/menutup koneksi
// di setiap request.
// ============================================================
const pool = mysql.createPool({
  host:     process.env.DB_HOST     || '127.0.0.1',
  port:     Number(process.env.DB_PORT) || 3306,
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME     || 'healthy_meal_db',
  waitForConnections: true,
  connectionLimit:    10,
  queueLimit:         0,
  // Mencegah error "ECONNRESET" pada koneksi idle terlalu lama
  enableKeepAlive:    true,
  keepAliveInitialDelay: 10000,
});

// Uji koneksi pertama saat server dijalankan
pool.getConnection()
  .then((conn) => {
    console.log(`✅  Database terhubung ke MySQL di ${process.env.DB_HOST}:${process.env.DB_PORT}`);
    conn.release(); // Kembalikan koneksi ke pool setelah dicek
  })
  .catch((err: NodeJS.ErrnoException) => {
    console.error('❌  Gagal terhubung ke database MySQL:', err.message);
    console.error('    Pastikan MySQL berjalan dan konfigurasi .env sudah benar.');
    process.exit(1); // Hentikan server jika DB tidak bisa dihubungi
  });

export default pool;
