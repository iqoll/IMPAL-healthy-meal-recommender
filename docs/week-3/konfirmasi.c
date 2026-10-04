/*
 * konfirmasi.c
 * PSPEC 4.0 - Konfirmasi (Structured English)
 *
 * Input  : nomor-tujuan, nominal, data store KONFIGURASI (tarif)
 * Output : biaya-admin, total-biaya (ke proses 5.0)
 * Return : KONFIRMASI_YA, KONFIRMASI_BACK, KONFIRMASI_HOME, atau KONFIRMASI_BATAL
 */
#include <stdio.h>
#include <string.h>
#include "data.h"
#include "util.h"
#include "pspec.h"

int konfirmasi(const char *nomor_tujuan, long nominal,
               long *biaya_admin, long *total_biaya)
{
    char jawaban[8];
    int berhasil;   /* hasil baca_input: 1 = berhasil, 0 = input habis */

    /* FIND biaya-admin untuk nominal di KONFIGURASI (tarif) */
    *biaya_admin = cari_biaya_admin(nominal);

    while (1) {
        /* DISPLAY konfirmasi */
        printf("\nHati2 penipuan. Anda akan Transfer Pulsa %ld ke nomor %s ? "
               "(Biaya %ld)\n", nominal, nomor_tujuan, *biaya_admin);
        printf("1.Ya\n9.Back\n0.Home\n> ");

        /* GET jawaban: tunggu pelanggan mengetik 1, 9, atau 0 */
        berhasil = baca_input(jawaban, sizeof jawaban);
        if (berhasil == 0)
            return KONFIRMASI_BATAL;   /* input habis */

        /* DO CASE */
        if (strcmp(jawaban, "1") == 0) {
            /* COMPUTE total-biaya = nominal + biaya-admin */
            *total_biaya = nominal + *biaya_admin;
            return KONFIRMASI_YA;          /* SEND ke proses 5.0 */
        } else if (strcmp(jawaban, "9") == 0) {
            return KONFIRMASI_BACK;        /* kembali ke proses 3.0 */
        } else if (strcmp(jawaban, "0") == 0) {
            return KONFIRMASI_HOME;        /* kembali ke proses 1.0 */
        }

        printf("\nPilihan tidak valid.\n");
    }
}
