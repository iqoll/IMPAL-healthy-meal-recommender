/*
 * util.h
 * Fungsi bantu untuk membaca input dari keyboard.
 */
#ifndef UTIL_H
#define UTIL_H

int baca_input(char *buf, int ukuran);   /* 1 = berhasil, 0 = input habis */
int hanya_angka(const char *s);          /* 1 = semua karakter angka */

#endif
