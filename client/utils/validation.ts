// client/utils/validation.ts
// Modul utilitas validasi input menggunakan Regular Expression (RegEx)
// Digunakan di sisi client (React Native) untuk memvalidasi form registrasi.
// Pola RegEx yang sama juga diterapkan di server sebagai lapisan keamanan kedua.

// ============================================================
// Pola RegEx (Regular Expression)
// ============================================================

/**
 * NAMA: Hanya huruf (a-z, A-Z) dan spasi, panjang 3–50 karakter.
 * Penjelasan pola: ^[a-zA-Z\s]{3,50}$
 *   ^            → Awal string
 *   [a-zA-Z\s]   → Karakter yang dibolehkan: huruf kecil, huruf besar, spasi
 *   {3,50}       → Minimal 3 karakter, maksimal 50 karakter
 *   $            → Akhir string
 */
export const NAMA_REGEX = /^[a-zA-Z\s]{3,50}$/;

/**
 * EMAIL: Format email standar (RFC sederhana).
 * Penjelasan pola: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
 *   ^[a-zA-Z0-9._%+-]+  → Bagian lokal (sebelum @): huruf, angka, titik, underscore, persen, plus, minus
 *   @                    → Wajib ada simbol @
 *   [a-zA-Z0-9.-]+       → Nama domain: huruf, angka, titik, minus
 *   \.                   → Wajib ada titik pemisah domain
 *   [a-zA-Z]{2,}         → TLD (top-level domain) minimal 2 huruf (com, id, co.id, dsb.)
 *   $                    → Akhir string
 */
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * PASSWORD: Minimal 8 karakter, wajib mengandung ≥1 huruf besar, ≥1 huruf kecil, ≥1 angka.
 * Penjelasan pola: ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$
 *   ^              → Awal string
 *   (?=.*[a-z])    → Lookahead: harus ada minimal 1 huruf kecil di mana saja
 *   (?=.*[A-Z])    → Lookahead: harus ada minimal 1 huruf besar di mana saja
 *   (?=.*\d)       → Lookahead: harus ada minimal 1 angka (digit 0-9)
 *   [a-zA-Z\d@$!%*?&]{8,}  → Karakter yang dibolehkan (huruf, angka, simbol tertentu), minimal 8
 *   $              → Akhir string
 */
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;

// ============================================================
// Tipe untuk hasil validasi
// ============================================================

/** Hasil validasi per field: valid atau tidak, beserta pesan error jika gagal */
export interface ValidationResult {
  valid: boolean;
  message: string;
}

/** Hasil validasi keseluruhan form registrasi */
export interface RegisterValidation {
  nama: ValidationResult;
  email: ValidationResult;
  password: ValidationResult;
  repeatPassword: ValidationResult;
  /** true jika semua field lolos validasi */
  isAllValid: boolean;
}

// ============================================================
// Fungsi validasi per field
// ============================================================

/** Validasi nama lengkap */
export function validateNama(nama: string): ValidationResult {
  const trimmed = nama.trim();
  if (!trimmed) {
    return { valid: false, message: 'Nama tidak boleh kosong.' };
  }
  if (!NAMA_REGEX.test(trimmed)) {
    return {
      valid: false,
      message: 'Nama hanya boleh huruf dan spasi, panjang 3–50 karakter.',
    };
  }
  return { valid: true, message: '' };
}

/** Validasi alamat email */
export function validateEmail(email: string): ValidationResult {
  const trimmed = email.trim();
  if (!trimmed) {
    return { valid: false, message: 'Email tidak boleh kosong.' };
  }
  if (!EMAIL_REGEX.test(trimmed)) {
    return {
      valid: false,
      message: 'Format email tidak valid. Contoh: nama@email.com',
    };
  }
  return { valid: true, message: '' };
}

/** Validasi password (kekuatan) */
export function validatePassword(password: string): ValidationResult {
  if (!password) {
    return { valid: false, message: 'Password tidak boleh kosong.' };
  }
  if (!PASSWORD_REGEX.test(password)) {
    return {
      valid: false,
      message:
        'Password minimal 8 karakter, harus mengandung huruf besar, huruf kecil, dan angka.',
    };
  }
  return { valid: true, message: '' };
}

/** Validasi konfirmasi password (harus sama dengan password utama) */
export function validateRepeatPassword(
  password: string,
  repeatPassword: string
): ValidationResult {
  if (!repeatPassword) {
    return { valid: false, message: 'Konfirmasi password tidak boleh kosong.' };
  }
  if (password !== repeatPassword) {
    return { valid: false, message: 'Password dan konfirmasi password tidak cocok.' };
  }
  return { valid: true, message: '' };
}

// ============================================================
// Fungsi validasi seluruh form sekaligus
// ============================================================

/**
 * Memvalidasi seluruh input form registrasi.
 * Mengembalikan objek berisi hasil validasi tiap field dan flag isAllValid.
 */
export function validateRegisterForm(
  nama: string,
  email: string,
  password: string,
  repeatPassword: string
): RegisterValidation {
  const namaResult = validateNama(nama);
  const emailResult = validateEmail(email);
  const passwordResult = validatePassword(password);
  const repeatResult = validateRepeatPassword(password, repeatPassword);

  return {
    nama: namaResult,
    email: emailResult,
    password: passwordResult,
    repeatPassword: repeatResult,
    isAllValid:
      namaResult.valid &&
      emailResult.valid &&
      passwordResult.valid &&
      repeatResult.valid,
  };
}
