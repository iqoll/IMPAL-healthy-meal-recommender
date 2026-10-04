/*
 * notifikasi.c
 * PSPEC 6.0 - Notifikasi SMS & Promo (Structured English)
 *
 * Input  : status-transaksi dari data store TRANSAKSI, jawaban-promo
 * Output : display informasi dan SMS ke PELANGGAN
 */
#include <stdio.h>
#include <string.h>
#include "data.h"
#include "util.h"
#include "pspec.h"

void notifikasi(int id_transaksi)
{
    char jawaban_promo[8];
    int berhasil;   /* hasil baca_input: 1 = berhasil, 0 = input habis */

    /* GET status-transaksi dari TRANSAKSI */
    Transaksi *t = &TRANSAKSI[id_transaksi];

    if (strcmp(t->status, "BERHASIL") == 0) {
        printf("\nTerima kasih, permintaan Anda sedang di proses.\n");
    } else {
        printf("\nMaaf, permintaan Anda tidak bisa di proses.\n");
        printf("[SMS dari 858] Maaf, Sisa Pulsa Anda tidak mencukupi "
               "untuk melakukan Transfer Pulsa.\n");
    }

    /* DISPLAY penawaran promo */
    printf("Nonton Film & Series Original Maxstream di Bioskop MAXstream "
           "Hanya 1110/hr slm 360hr. Mau? CS:188\n");
    printf("1.Ya\n2.Tidak\n> ");

    /* GET jawaban-promo: tunggu pelanggan mengetik 1 atau 2 */
    berhasil = baca_input(jawaban_promo, sizeof jawaban_promo);

    /* Promo diproses hanya jika input terbaca dan jawabannya "1" */
    if (berhasil == 1 && strcmp(jawaban_promo, "1") == 0) {
        printf("\nPermintaan berlangganan promo sedang diproses.\n");
    }

    printf("\nTerima kasih\n");
    /* END sesi */
}
