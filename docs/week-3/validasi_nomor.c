/*
 * validasi_nomor.c
 * PSPEC 2.0 - Validasi Nomor Telepon
 * (Structured English untuk normalisasi + Decision Table untuk validasi)
 *
 * Input  : nomor-tujuan, data store PELANGGAN (status)
 * Output : 1 jika nomor valid (lanjut ke proses 3.0), 0 jika gagal
 */
#include <stdio.h>
#include <string.h>
#include "data.h"
#include "util.h"
#include "pspec.h"

/* IF nomor-tujuan diawali "08"
       REPLACE "0" di depan nomor-tujuan dengan "62" */
static void normalisasi_nomor(char *nomor)
{
    size_t panjang = strlen(nomor);

    if (strncmp(nomor, "08", 2) == 0 && panjang + 2 <= PANJANG_NOMOR) {
        memmove(nomor + 2, nomor + 1, panjang);   /* geser, termasuk '\0' */
        nomor[0] = '6';
        nomor[1] = '2';
    }
}

int validasi_nomor(char *nomor_tujuan, const char *nomor_pengirim)
{
    size_t panjang;
    int format_benar;
    Pelanggan *p;

    normalisasi_nomor(nomor_tujuan);

    /* Kondisi 1: hanya angka dan diawali 628 */
    panjang = strlen(nomor_tujuan);
    format_benar = hanya_angka(nomor_tujuan) &&
                   strncmp(nomor_tujuan, "628", 3) == 0 &&
                   panjang >= 11 && panjang <= 15;

    /* Aturan 5: format salah */
    if (!format_benar) {
        printf("\nFormat nomor salah.\n");
        return 0;
    }

    /* Kondisi 2: terdaftar di PELANGGAN -> aturan 4 jika tidak */
    p = cari_pelanggan(nomor_tujuan);
    if (p == NULL) {
        printf("\nNomor tidak terdaftar.\n");
        return 0;
    }

    /* Kondisi 3: status aktif -> aturan 3 jika tidak */
    if (!p->aktif) {
        printf("\nNomor tidak aktif.\n");
        return 0;
    }

    /* Kondisi 4: bukan nomor pengirim sendiri -> aturan 2 jika sama */
    if (strcmp(nomor_tujuan, nomor_pengirim) == 0) {
        printf("\nTidak bisa transfer ke nomor sendiri.\n");
        return 0;
    }

    /* Aturan 1: semua kondisi terpenuhi, lanjut ke proses 3.0 */
    return 1;
}
