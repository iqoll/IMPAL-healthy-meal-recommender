// server/index.ts
// Entry point utama server Express.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Inisialisasi variabel environment dari .env sebelum import lainnya
dotenv.config();

// Import koneksi database (koneksi diuji otomatis saat import)
import './database/connection';

// Import route modules
import authRouter from './routes/auth';

const app = express();
const PORT = Number(process.env.PORT) || 5000;

// ============================================================
// Middleware global
// ============================================================
app.use(cors({
  // TODO: Ganti dengan domain/IP production saat deploy
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================================================
// Health-check endpoint (berguna untuk pengujian cepat)
// GET http://localhost:5000/health
// ============================================================
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    server: 'Healthy Meal Recommender API',
    timestamp: new Date().toISOString(),
  });
});

// ============================================================
// Routing utama
// ============================================================
app.use('/api/auth', authRouter);

// TODO: Tambahkan route lain di sini seiring fitur berkembang
// app.use('/api/profil',   profilRouter);
// app.use('/api/bahan',    bahanMakananRouter);
// app.use('/api/menu',     menuMakananRouter);
// app.use('/api/chat',     chatAIRouter);

// ============================================================
// Global error handler (tangkap error yang tidak tertangani)
// ============================================================
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error('[Unhandled Error]', err.message);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
);

// ============================================================
// Jalankan server
// ============================================================
app.listen(PORT, () => {
  console.log(`🚀  Server berjalan di http://localhost:${PORT}`);
  console.log(`📋  Health check: http://localhost:${PORT}/health`);
  console.log(`🔐  Auth API:     http://localhost:${PORT}/api/auth`);
});

export default app;
