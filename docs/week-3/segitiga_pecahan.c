#include <math.h>
#include <stdio.h>

#define TOLERANSI 0.01

/* Dua panjang dianggap sama jika selisih relatif <= 1% */
static int sama(double x, double y)
{
    double besar = (x > y) ? x : y;
    return fabs(x - y) <= TOLERANSI * besar;
}

/* Urutkan: s[0] <= s[1] <= s[2] (sisi terbesar di s[2]) */
static void urutkan(double s[3])
{
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2 - i; j++)
            if (s[j] > s[j + 1])
            {
                double tmp = s[j];
                s[j] = s[j + 1];
                s[j + 1] = tmp;
            }
}

static const char *tentukan_segitiga(double a, double b, double c)
{
    /* 1. Ada sisi negatif atau nol */
    if (a <= 0 || b <= 0 || c <= 0)
        return "BUKAN SEGITIGA (ada sisi <= 0)";

    double s[3] = {a, b, c};
    urutkan(s);
    double kecil = s[0], tengah = s[1], besar = s[2];

    /* 2. Sisi terbesar >= jumlah dua sisi lainnya */
    if (besar >= kecil + tengah)
        return "BUKAN SEGITIGA (sisi terbesar >= jumlah dua sisi lain)";

    /* 3. Sama sisi: a=b dan b=c */
    if (sama(kecil, tengah) && sama(tengah, besar))
        return "SEGITIGA SAMA SISI (EQUILATERAL)";

    /* 4. Sama kaki: a=b atau b=c atau a=c */
    if (sama(a, b) || sama(b, c) || sama(a, c))
        return "SEGITIGA SAMA KAKI (ISOSCELES)";

    /* 5. Siku-siku: kuadrat terbesar = jumlah kuadrat dua lainnya (toleransi 1%) */
    double kuadrat_besar = besar * besar;
    double jumlah_kuadrat = kecil * kecil + tengah * tengah;
    if (fabs(kuadrat_besar - jumlah_kuadrat) <= TOLERANSI * kuadrat_besar)
        return "SEGITIGA SIKU-SIKU (RIGHT)";

    /* 6. Selain itu: segitiga sembarang */
    return "SEGITIGA SEMBARANG (FREE)";
}

int main(void)
{
    double a, b, c;

    printf("Masukkan 3 sisi (boleh pecahan, contoh 3.0 4.0 5.0): ");
    if (scanf("%lf %lf %lf", &a, &b, &c) != 3)
    {
        printf("Input tidak valid.\n");
        return 1;
    }
    printf("%s\n", tentukan_segitiga(a, b, c));
    return 0;
}
