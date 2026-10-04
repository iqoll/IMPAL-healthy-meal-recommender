/*
 * main.c
 * Menghubungkan proses 1.0 sampai 6.0 sesuai alur DFD layanan *858#.
 */
#include <stdio.h>
#include "data.h"
#include "pspec.h"

int main(void)
{
    char nomor_tujuan[PANJANG_NOMOR];
    int dari_home = 0;
    int hasil, id;
    long nominal, biaya_admin = 0, total_biaya = 0;

    printf("=== Simulasi USSD *858# (pengirim: %s, sisa pulsa: %ld) ===\n",
           NOMOR_PENGIRIM, cari_pelanggan(NOMOR_PENGIRIM)->saldo);

    while (1) {
        /* 1.0 Kelola Sesi */
        if (!kelola_sesi(dari_home, nomor_tujuan, sizeof nomor_tujuan))
            break;

        /* 2.0 Validasi Nomor Telepon */
        if (!validasi_nomor(nomor_tujuan, NOMOR_PENGIRIM))
            break;

        /* 3.0 Validasi Nominal dan 4.0 Konfirmasi (9.Back mengulang 3.0) */
        do {
            nominal = validasi_nominal();
            if (nominal < 0)
                return 0;
            hasil = konfirmasi(nomor_tujuan, nominal,
                               &biaya_admin, &total_biaya);
        } while (hasil == KONFIRMASI_BACK);

        if (hasil == KONFIRMASI_HOME) {     /* 0.Home kembali ke menu */
            dari_home = 1;
            continue;
        }
        if (hasil != KONFIRMASI_YA)
            break;

        /* 5.0 Eksekusi */
        id = eksekusi(NOMOR_PENGIRIM, nomor_tujuan,
                      nominal, biaya_admin, total_biaya);

        /* 6.0 Notifikasi SMS & Promo */
        if (id >= 0)
            notifikasi(id);
        break;
    }

    printf("Sesi berakhir.\n");
    return 0;
}
