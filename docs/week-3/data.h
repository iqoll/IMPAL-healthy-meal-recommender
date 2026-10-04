/*
 * data.h
 * Struktur data dan data store yang dipakai oleh semua proses:
 * PELANGGAN (status & saldo), KONFIGURASI (batas min/max & tarif), TRANSAKSI.
 */
#ifndef DATA_H
#define DATA_H

#define PANJANG_NOMOR   20
#define MAKS_TRANSAKSI  100

/* KONFIGURASI (batas min/max) */
#define BATAS_MIN       5000L
#define BATAS_MAX       1000000L

typedef struct {
    char nomor[PANJANG_NOMOR];
    int  aktif;              /* 1 = aktif, 0 = tidak aktif */
    long saldo;              /* sisa pulsa */
} Pelanggan;

typedef struct {
    long nominal_maks;       /* tarif berlaku sampai nominal ini */
    long biaya_admin;
} Tarif;

typedef struct {
    int  id;
    char pengirim[PANJANG_NOMOR];
    char tujuan[PANJANG_NOMOR];
    long nominal;
    long biaya_admin;
    long total_biaya;
    char status[40];
    char waktu[20];
} Transaksi;

/* Nomor yang sedang menelepon *858# (simulasi) */
extern const char NOMOR_PENGIRIM[];

/* Data store */
extern Pelanggan PELANGGAN[];
extern const int JUMLAH_PELANGGAN;
extern Transaksi TRANSAKSI[];
extern int JUMLAH_TRANSAKSI;

Pelanggan *cari_pelanggan(const char *nomor);
long cari_biaya_admin(long nominal);

#endif
