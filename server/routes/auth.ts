// server/routes/auth.ts
// Route autentikasi: POST /api/auth/login & POST /api/auth/register

import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../database/connection';

const router = Router();

// ============================================================
// POST /api/auth/register
// Body: { nama, email, password }
// ============================================================
router.post('/register', async (req: Request, res: Response) => {
  const { nama, email, password } = req.body as {
    nama: string;
    email: string;
    password: string;
  };

  if (!nama || !email || !password) {
    return res.status(400).json({
      status: 'error',
      message: 'nama, email, dan password wajib diisi.',
    });
  }

  try {
    // Cek apakah email sudah terdaftar
    const [rows] = await pool.query<any[]>(
      'SELECT id_pengguna FROM pengguna WHERE email = ?',
      [email]
    );
    if (rows.length > 0) {
      return res.status(409).json({
        status: 'error',
        message: 'Email sudah terdaftar.',
      });
    }

    // Hash password sebelum disimpan (bcrypt 10 rounds)
    const passwordHash = await bcrypt.hash(password, 10);

    // Simpan pengguna baru
    await pool.query(
      'INSERT INTO pengguna (nama, email, password_hash) VALUES (?, ?, ?)',
      [nama, email, passwordHash]
    );

    return res.status(201).json({
      status: 'success',
      message: 'Registrasi berhasil. Silakan login.',
    });
  } catch (error: any) {
    console.error('[register] DB error:', error.message);
    return res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan server.',
    });
  }
});

// ============================================================
// POST /api/auth/login
// Body: { email, password }
// Response: { status, token, user: { id, nama, email } }
// ============================================================
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };

  if (!email || !password) {
    return res.status(400).json({
      status: 'error',
      message: 'Email dan password wajib diisi.',
    });
  }

  try {
    // Ambil pengguna berdasarkan email
    const [rows] = await pool.query<any[]>(
      'SELECT id_pengguna, nama, email, password_hash FROM pengguna WHERE email = ?',
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        status: 'error',
        message: 'Email atau password salah.',
      });
    }

    const pengguna = rows[0];

    // Bandingkan password dengan hash di database
    const passwordValid = await bcrypt.compare(password, pengguna.password_hash);
    if (!passwordValid) {
      return res.status(401).json({
        status: 'error',
        message: 'Email atau password salah.',
      });
    }

    // Buat JWT token (berlaku 7 hari)
    const jwtSecret = process.env.JWT_SECRET || 'fallback_secret_ganti_ini';
    const token = jwt.sign(
      { id: pengguna.id_pengguna, email: pengguna.email },
      jwtSecret,
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      status: 'success',
      token,
      user: {
        id:    pengguna.id_pengguna,
        nama:  pengguna.nama,
        email: pengguna.email,
      },
    });
  } catch (error: any) {
    console.error('[login] DB error:', error.message);
    return res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan server.',
    });
  }
});

export default router;
