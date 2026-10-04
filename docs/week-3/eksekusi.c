/*
 * eksekusi.c
 * PSPEC 5.0 - Eksekusi (Pre/Post Condition)
 *
 * Input  : nomor pengirim & tujuan, nominal, biaya-admin, total-biaya
 * Output : perubahan PELANGGAN (saldo) dan record baru di TRANSAKSI
 * Return : id transaksi (ke proses 6.0), atau -1 jika TRANSAKSI penuh
 */
#include <stdio.h>
#include <string.h>
#include <time.h>
#include "data.h"
#include "pspec.h"

int eksekusi(const char *nomor_pengirim, const char *nomor_tujuan,
             long nominal, long biaya_admin, long total_biaya)
{
    Pelanggan *pengirim = cari_pelanggan(nomor_pengirim);
    Pelanggan *penerima = cari_pelanggan(nomor_tujuan);
    Transaksi *t;
    time_t sekarang = time(NULL);

    if (JUMLAH_TRANSAKSI >= MAKS_TRANSAKSI)
        return -1;

    /* Siapkan record TRANSAKSI baru */
    t = &TRANSAKSI[JUMLAH_TRANSAKSI];
    t->id = JUMLAH_TRANSAKSI + 1;
    strcpy(t->pengirim, nomor_pengirim);
    strcpy(t->tujuan, nomor_tujuan);
    t->nominal = nominal;
    t->biaya_admin = biaya_admin;
    t->total_biaya = total_biaya;
    strftime(t->waktu, sizeof t->waktu, "%Y-%m-%d %H:%M:%S",
             localtime(&sekarang));

    if (pengirim != NULL && penerima != NULL &&
        pengirim->saldo >= total_biaya) {
        /* Precondition 1 -> Postcondition 1 */
        pengirim->saldo -= total_biaya;
        penerima->saldo += nominal;
        strcpy(t->status, "BERHASIL");
    } else {
        /* Precondition 2 -> Postcondition 2: saldo tidak berubah */
        strcpy(t->status, "GAGAL - pulsa tidak cukup");
    }

    JUMLAH_TRANSAKSI++;
    return JUMLAH_TRANSAKSI - 1;   /* indeks record di TRANSAKSI */
}
