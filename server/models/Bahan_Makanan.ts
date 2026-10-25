export class Bahan_Makanan {
  public bahanId: string;
  public kategoriBahan: string;
  public namaBahan: string;
  public jumlahBahan: number;
  public dateAdded: Date;

  private static daftarBahan: Bahan_Makanan[] = [];

  constructor(
    bahanId: string,
    kategoriBahan: string,
    namaBahan: string,
    jumlahBahan: number,
    dateAdded: Date = new Date()
  ) {
    this.bahanId = bahanId;
    this.kategoriBahan = kategoriBahan;
    this.namaBahan = namaBahan;
    this.jumlahBahan = jumlahBahan;
    this.dateAdded = dateAdded;
  }

  // Method (+ public sesuai Tabel 3.3 DPPL)
  public addBahan(bahanMakanan: Bahan_Makanan): Bahan_Makanan {
    Bahan_Makanan.daftarBahan.push(bahanMakanan);
    return bahanMakanan;
  }

  public updateBahan(bahanId: string, bahanBaru: Partial<Bahan_Makanan>): Bahan_Makanan {
    const index = Bahan_Makanan.daftarBahan.findIndex((b) => b.bahanId === bahanId);
    if (index !== -1) {
      Object.assign(Bahan_Makanan.daftarBahan[index], bahanBaru);
      return Bahan_Makanan.daftarBahan[index];
    }
    return this;
  }

  public deleteBahan(bahanId: string): boolean {
    const panjangAwal = Bahan_Makanan.daftarBahan.length;
    Bahan_Makanan.daftarBahan = Bahan_Makanan.daftarBahan.filter((b) => b.bahanId !== bahanId);
    return Bahan_Makanan.daftarBahan.length < panjangAwal;
  }

  public readBahan(bahanId: string): Bahan_Makanan | undefined {
    return Bahan_Makanan.daftarBahan.find((b) => b.bahanId === bahanId);
  }

  public readAllBahanSorted(sortBy: string = 'dateAdded', sortOrder: string = 'DESC'): Bahan_Makanan[] {
    return [...Bahan_Makanan.daftarBahan].sort((a, b) => {
      if (sortOrder === 'DESC') {
        return b.dateAdded.getTime() - a.dateAdded.getTime();
      }
      return a.dateAdded.getTime() - b.dateAdded.getTime();
    });
  }

  public readBahanByKategori(kategori: string, sortBy: string, sortOrder: string): Bahan_Makanan[] {
    const terfilter = Bahan_Makanan.daftarBahan.filter((b) => b.kategoriBahan === kategori);
    return terfilter;
  }
}