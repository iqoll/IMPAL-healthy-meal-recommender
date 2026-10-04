/*
 * pspec.h
 * Prototipe fungsi untuk setiap proses pada DFD layanan *858#.
 * Setiap fungsi diimplementasikan di file terpisah sesuai PSPEC-nya.
 */
#ifndef PSPEC_H
#define PSPEC_H

/* Nilai kembalian proses 4.0 Konfirmasi */
#define KONFIRMASI_YA     1
#define KONFIRMASI_BACK   9
#define KONFIRMASI_HOME   0
#define KONFIRMASI_BATAL -1

int  kelola_sesi(int dari_home, char *nomor_tujuan, int ukuran);           /* 1.0 */
int  validasi_nomor(char *nomor_tujuan, const char *nomor_pengirim);       /* 2.0 */
long validasi_nominal(void);                                               /* 3.0 */
int  konfirmasi(const char *nomor_tujuan, long nominal,
                long *biaya_admin, long *total_biaya);                     /* 4.0 */
int  eksekusi(const char *nomor_pengirim, const char *nomor_tujuan,
              long nominal, long biaya_admin, long total_biaya);           /* 5.0 */
void notifikasi(int id_transaksi);                                         /* 6.0 */

#endif
