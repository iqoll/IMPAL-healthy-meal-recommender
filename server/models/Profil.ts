// File: Profil.ts
// PIC: Muhammad Haiqal (103042400013)

export interface KebutuhanNutrisiResult {
  targetKaloriHarian: number;
  targetProtein: number;
  targetLemak: number;
  targetKarbohidrat: number;
}

export class Profil {
  // Atribut (- private sesuai Class Diagram DPPL)
  private nama: string;
  private username: string;
  private gender: string;
  private tinggiBadan: number;
  private beratBadan: number;
  private tujuanKalori: number;
  private asupanAir: number;

  constructor(
    nama: string,
    username: string,
    gender: 'Pria' | 'Wanita',
    tinggiBadan: number,
    beratBadan: number,
    tujuanKalori: number = 2000,
    asupanAir: number = 2000
  ) {
    this.nama = nama;
    this.username = username;
    this.gender = gender;
    this.tinggiBadan = tinggiBadan;
    this.beratBadan = beratBadan;
    this.tujuanKalori = tujuanKalori;
    this.asupanAir = asupanAir;
  }

  // Method (+ public sesuai Tabel 3.3 DPPL)
  public addProfile(): Profil {
    return this;
  }

  public updateProfile(
    tinggiBaru?: number,
    beratBaru?: number,
    tujuanKaloriBaru?: number
  ): Profil {
    if (tinggiBaru) this.tinggiBadan = tinggiBaru;
    if (beratBaru) this.beratBadan = beratBaru;
    if (tujuanKaloriBaru) this.tujuanKalori = tujuanKaloriBaru;
    return this;
  }

  public getProfile(): Profil {
    return this;
  }

  // Implementasi Algoritma 3.4.1 "HitungKebutuhanNutrisi"
  public hitungKebutuhanNutrisi(usia: number = 21): KebutuhanNutrisiResult {
    let bmr = 0;

    if (this.gender === 'Pria') {
      bmr = 88.362 + 13.397 * this.beratBadan + 4.799 * this.tinggiBadan - 5.677 * usia;
    } else {
      bmr = 447.593 + 9.247 * this.beratBadan + 3.098 * this.tinggiBadan - 4.330 * usia;
    }

    const targetKalori = Math.round(bmr * 1.2); // Faktor aktivitas ringan
    const protein = Math.round((targetKalori * 0.15) / 4);
    const lemak = Math.round((targetKalori * 0.25) / 9);
    const karbohidrat = Math.round((targetKalori * 0.60) / 4);

    this.tujuanKalori = targetKalori;

    return {
      targetKaloriHarian: targetKalori,
      targetProtein: protein,
      targetLemak: lemak,
      targetKarbohidrat: karbohidrat,
    };
  }

  public hitungAsupanAir(): number {
    // Standar 30-35 ml per kg berat badan
    this.asupanAir = this.beratBadan * 35;
    return this.asupanAir;
  }
}