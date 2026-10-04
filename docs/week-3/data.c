/*
 * data.c
 * Isi data store untuk simulasi. Pada sistem sebenarnya data ini
 * berasal dari database operator.
 */
#include <string.h>
#include "data.h"

const char NOMOR_PENGIRIM[] = "6281200000001";

/* PELANGGAN (status & saldo) */
Pelanggan PELANGGAN[] = {
    { "6281200000001", 1, 20000 },   /* pengirim */
    { "6281315394921", 1, 10000 },
    { "6285711112222", 1,  5000 },
    { "6281234567890", 0,  8000 }    /* nomor tidak aktif */
};
const int JUMLAH_PELANGGAN = sizeof(PELANGGAN) / sizeof(PELANGGAN[0]);

/* KONFIGURASI (tarif) - biaya 1850 untuk 5000 sesuai layar USSD,
 * tingkatan lainnya hanya contoh. */
static const Tarif TARIF[] = {
    {   10000L, 1850 },
    {   50000L, 2850 },
    {  100000L, 4850 },
    { 1000000L, 6850 }
};
static const int JUMLAH_TARIF = sizeof(TARIF) / sizeof(TARIF[0]);

/* TRANSAKSI (riwayat transfer) */
Transaksi TRANSAKSI[MAKS_TRANSAKSI];
int JUMLAH_TRANSAKSI = 0;

Pelanggan *cari_pelanggan(const char *nomor)
{
    int i;
    for (i = 0; i < JUMLAH_PELANGGAN; i++) {
        if (strcmp(PELANGGAN[i].nomor, nomor) == 0)
            return &PELANGGAN[i];
    }
    return NULL;
}

long cari_biaya_admin(long nominal)
{
    int i;
    for (i = 0; i < JUMLAH_TARIF; i++) {
        if (nominal <= TARIF[i].nominal_maks)
            return TARIF[i].biaya_admin;
    }
    return TARIF[JUMLAH_TARIF - 1].biaya_admin;
}
