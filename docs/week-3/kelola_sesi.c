/*
 * kelola_sesi.c
 * PSPEC 1.0 - Kelola Sesi (Structured English)
 *
 * Input  : input-sesi, pilihan-menu
 * Output : nomor-tujuan (ke proses 2.0)
 * Return : 1 jika pelanggan memilih Transfer Pulsa dan mengisi nomor tujuan,
 *          0 jika sesi berakhir.
 */
#include <stdio.h>
#include <string.h>
#include "util.h"
#include "pspec.h"

int kelola_sesi(int dari_home, char *nomor_tujuan, int ukuran)
{
    char input_sesi[32];
    char pilihan_menu[8];
    int berhasil;   /* hasil baca_input: 1 = berhasil, 0 = input habis */
    char pilihan;   /* karakter pilihan menu yang diperiksa oleh switch */

    /* GET input-sesi dari PELANGGAN
       (dilewati jika kembali lewat 0.Home dari proses 4.0) */
    if (!dari_home) {
        printf("Ketik kode layanan: ");

        /* Tunggu pelanggan mengetik kode layanan, simpan ke input_sesi */
        berhasil = baca_input(input_sesi, sizeof input_sesi);
        if (berhasil == 0)
            return 0;   /* input habis, sesi berakhir */

        /* IF input-sesi = "*858#" */
        if (strcmp(input_sesi, "*858#") != 0) {
            printf("Kode layanan tidak dikenali.\n");
            return 0;
        }
    }

    /* DISPLAY menu */
    printf("\nTransfer pulsa lebih mudah, mulai dari 2000an\n");
    printf("1.Transfer Pulsa\n");
    printf("2.Masa Aktif\n");
    printf("3.Minta Pulsa\n");
    printf("4.Auto TP\n");
    printf("5.Delete Auto TP\n");
    printf("6.List Auto TP\n");
    printf("7.Cek Kupon Undian TP\n");
    printf("> ");

    /* GET pilihan-menu: tunggu pelanggan mengetik nomor menu */
    berhasil = baca_input(pilihan_menu, sizeof pilihan_menu);
    if (berhasil == 0)
        return 0;   /* input habis, sesi berakhir */

    /* switch hanya bisa memeriksa satu karakter. Jika pelanggan mengetik
       lebih dari satu karakter (misal "12") atau tidak mengetik apa pun,
       pilihan diisi '\0' supaya masuk ke default (pilihan tidak valid). */
    if (strlen(pilihan_menu) == 1)
        pilihan = pilihan_menu[0];
    else
        pilihan = '\0';

    /* DO CASE */
    switch (pilihan) {
    case '1':
        /* CASE pilihan-menu = 1 */
        printf("\nSilahkan masukkan nomor tujuan Transfer Pulsa : "
               "(contoh: 08xxxx atau 628xxxx)\n> ");

        /* Tunggu pelanggan mengetik nomor tujuan */
        berhasil = baca_input(nomor_tujuan, ukuran);
        if (berhasil == 0)
            return 0;   /* input habis, sesi berakhir */
        return 1;   /* SEND nomor-tujuan ke proses 2.0 */

    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
        /* CASE pilihan-menu = 2 sampai 7 */
        printf("\nLayanan nomor %s belum tersedia.\n",
               pilihan_menu);
        return 0;

    default:
        /* OTHERWISE */
        printf("\nPilihan tidak valid.\n");
        return 0;
    }
}
