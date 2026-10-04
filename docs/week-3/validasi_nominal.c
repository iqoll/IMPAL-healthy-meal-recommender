/*
 * validasi_nominal.c
 * PSPEC 3.0 - Validasi Nominal Pulsa (Pre/Post Condition)
 *
 * Input  : nominal, data store KONFIGURASI (batas min/max)
 * Output : nominal yang valid (ke proses 4.0), atau -1 jika input habis
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "data.h"
#include "util.h"
#include "pspec.h"

long validasi_nominal(void)
{
    char input[32];
    long nominal;
    int berhasil;   /* hasil baca_input: 1 = berhasil, 0 = input habis */

    while (1) {
        printf("\nSilahkan masukkan jumlah pulsa yang akan ditransfer : "
               "(min %ld, max 1 jt & tanpa . (titik) atau , (koma))\n> ",
               BATAS_MIN);

        /* Tunggu pelanggan mengetik jumlah pulsa */
        berhasil = baca_input(input, sizeof input);
        if (berhasil == 0)
            return -1;   /* input habis */

        /* Precondition 1: hanya angka dan BATAS_MIN <= nominal <= BATAS_MAX */
        if (hanya_angka(input) && strlen(input) <= 7) {
            nominal = strtol(input, NULL, 10);
            if (nominal >= BATAS_MIN && nominal <= BATAS_MAX) {
                /* Postcondition 1: nominal diteruskan ke proses 4.0 */
                return nominal;
            }
        }

        /* Precondition 2 terpenuhi -> Postcondition 2:
           pesan kesalahan dan pelanggan mengisi ulang */
        printf("\nNominal tidak valid. Masukkan angka tanpa titik/koma "
               "antara %ld dan %ld.\n", BATAS_MIN, BATAS_MAX);
    }
}
