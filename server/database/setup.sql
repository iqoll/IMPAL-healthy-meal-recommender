-- =============================================================
-- Script Setup Database: healthy_meal_db
-- Jalankan sekali di MySQL sebelum menghidupkan server Node.js
-- Perintah: mysql -u root -p < database/setup.sql
-- =============================================================

CREATE DATABASE IF NOT EXISTS healthy_meal_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE healthy_meal_db;

-- -------------------------------------------------------------
-- Tabel: pengguna
-- Menyimpan akun dan kredensial login
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS pengguna (
  id_pengguna  CHAR(36)       NOT NULL DEFAULT (UUID())  COMMENT 'UUID primary key',
  nama         VARCHAR(100)   NOT NULL,
  email        VARCHAR(150)   NOT NULL,
  password_hash VARCHAR(255)  NOT NULL                   COMMENT 'Hash bcrypt',
  created_at   TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id_pengguna),
  UNIQUE KEY uq_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -------------------------------------------------------------
-- Tabel: profil
-- Data fisik & target nutrisi per pengguna
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS profil (
  id_profil       CHAR(36)     NOT NULL DEFAULT (UUID()),
  id_pengguna     CHAR(36)     NOT NULL,
  username        VARCHAR(80),
  gender          ENUM('Pria','Wanita')  NOT NULL,
  tinggi_badan    FLOAT        NOT NULL  COMMENT 'dalam cm',
  berat_badan     FLOAT        NOT NULL  COMMENT 'dalam kg',
  usia            INT          NOT NULL,
  tujuan_kalori   INT          NOT NULL DEFAULT 2000,
  asupan_air      INT          NOT NULL DEFAULT 2000  COMMENT 'dalam mL',
  created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id_profil),
  CONSTRAINT fk_profil_pengguna FOREIGN KEY (id_pengguna) REFERENCES pengguna(id_pengguna) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -------------------------------------------------------------
-- Tabel: preferensi
-- Alergi, pantangan diet, dan preferensi makanan
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS preferensi (
  id_preferensi   CHAR(36)  NOT NULL DEFAULT (UUID()),
  id_pengguna     CHAR(36)  NOT NULL,
  allergies       JSON      COMMENT 'Array string alergi, misal ["kacang","susu"]',
  diet_restrictions JSON    COMMENT 'Array string pantangan, misal ["vegetarian"]',
  food_preferences JSON     COMMENT 'Array string preferensi, misal ["pedas","gurih"]',
  created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id_preferensi),
  UNIQUE KEY uq_preferensi_pengguna (id_pengguna),
  CONSTRAINT fk_preferensi_pengguna FOREIGN KEY (id_pengguna) REFERENCES pengguna(id_pengguna) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -------------------------------------------------------------
-- Tabel: bahan_makanan
-- Stok bahan yang dimiliki pengguna
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS bahan_makanan (
  id_bahan        CHAR(36)     NOT NULL DEFAULT (UUID()),
  id_pengguna     CHAR(36)     NOT NULL,
  nama_bahan      VARCHAR(120) NOT NULL,
  kategori_bahan  VARCHAR(80),
  jumlah_bahan    FLOAT        NOT NULL DEFAULT 0,
  satuan          VARCHAR(20)  DEFAULT 'gram',
  date_added      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_bahan),
  CONSTRAINT fk_bahan_pengguna FOREIGN KEY (id_pengguna) REFERENCES pengguna(id_pengguna) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -------------------------------------------------------------
-- Tabel: menu_makanan
-- Riwayat / log makanan harian pengguna
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS menu_makanan (
  id_menu         CHAR(36)     NOT NULL DEFAULT (UUID()),
  id_pengguna     CHAR(36)     NOT NULL,
  nama_menu       VARCHAR(150) NOT NULL,
  info_kalori     FLOAT        NOT NULL DEFAULT 0,
  info_protein    FLOAT        NOT NULL DEFAULT 0,
  info_fats       FLOAT        NOT NULL DEFAULT 0,
  info_carbs      FLOAT        NOT NULL DEFAULT 0,
  waktu_makan     VARCHAR(30)  COMMENT 'Sarapan / Makan Siang / Makan Malam / Snack',
  schedule        DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  kategori_menu   JSON         COMMENT 'Array tag, misal ["Tinggi Protein","Sehat"]',
  created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_menu),
  CONSTRAINT fk_menu_pengguna FOREIGN KEY (id_pengguna) REFERENCES pengguna(id_pengguna) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -------------------------------------------------------------
-- Tabel: chat_ai
-- Riwayat sesi percakapan dengan AI
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS chat_ai (
  id_chat         CHAR(36)   NOT NULL DEFAULT (UUID()),
  id_pengguna     CHAR(36)   NOT NULL,
  peran           ENUM('user','ai') NOT NULL,
  pesan           TEXT       NOT NULL,
  rekomendasi     JSON       COMMENT 'Objek rekomendasi menu (opsional)',
  created_at      TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_chat),
  CONSTRAINT fk_chat_pengguna FOREIGN KEY (id_pengguna) REFERENCES pengguna(id_pengguna) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =============================================================
-- Data Seed (Akun demo untuk pengujian tim)
-- Password: "password123" di-hash dengan bcrypt round 10
-- Gunakan: node -e "const b=require('bcryptjs');console.log(b.hashSync('password123',10))"
-- untuk mendapatkan hash terbaru jika diperlukan
-- =============================================================
INSERT IGNORE INTO pengguna (id_pengguna, nama, email, password_hash) VALUES
  ('demo-user-0001-0000-000000000001',
   'Haiqal Demo',
   'demo@example.com',
   '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lihO');

SELECT 'Setup database healthy_meal_db selesai.' AS status;
