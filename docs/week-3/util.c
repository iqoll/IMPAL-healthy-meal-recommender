/*
 * util.c
 */
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include "util.h"

int baca_input(char *buf, int ukuran)
{
    if (fgets(buf, ukuran, stdin) == NULL) {
        buf[0] = '\0';
        return 0;
    }
    buf[strcspn(buf, "\r\n")] = '\0';   /* buang karakter enter */
    return 1;
}

int hanya_angka(const char *s)
{
    if (*s == '\0')
        return 0;
    for (; *s != '\0'; s++) {
        if (!isdigit((unsigned char)*s))
            return 0;
    }
    return 1;
}
