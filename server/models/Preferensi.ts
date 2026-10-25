// Christine Mako 103042310118

export interface PreferensiData {
  allergies: string[];
  dietRestrictions: string[];
  foodPreferences: string[];
}

export interface PreferensiJSON extends PreferensiData {
  userId: string;
}

export class Preferensi implements PreferensiData {
  userId: string;
  allergies: string[];
  dietRestrictions: string[];
  foodPreferences: string[];

  constructor(
    userId: string,
    allergies: string[] = [],
    dietRestrictions: string[] = [],
    foodPreferences: string[] = []
  ) {
    if (!userId || !userId.trim()) {
      throw new Error('userId wajib diisi');
    }
    this.userId = userId;
    this.allergies = Preferensi.normalisasi(allergies);
    this.dietRestrictions = Preferensi.normalisasi(dietRestrictions);
    this.foodPreferences = Preferensi.normalisasi(foodPreferences);
  }

  // + addPreferences(): Preferensi
  // Menambahkan item baru ke daftar yang sudah ada (duplikat diabaikan)
  addPreferences(data: Partial<PreferensiData> = {}): Preferensi {
    this.allergies = Preferensi.normalisasi([
      ...this.allergies,
      ...(data.allergies ?? []),
    ]);
    this.dietRestrictions = Preferensi.normalisasi([
      ...this.dietRestrictions,
      ...(data.dietRestrictions ?? []),
    ]);
    this.foodPreferences = Preferensi.normalisasi([
      ...this.foodPreferences,
      ...(data.foodPreferences ?? []),
    ]);
    return this;
  }

  // + updatePreferences(): Preferensi
  // Mengganti isi daftar (hanya field yang dikirim yang diubah)
  updatePreferences(data: Partial<PreferensiData> = {}): Preferensi {
    if (data.allergies) {
      this.allergies = Preferensi.normalisasi(data.allergies);
    }
    if (data.dietRestrictions) {
      this.dietRestrictions = Preferensi.normalisasi(data.dietRestrictions);
    }
    if (data.foodPreferences) {
      this.foodPreferences = Preferensi.normalisasi(data.foodPreferences);
    }
    return this;
  }

  // + getPreferences(): Preferensi
  getPreferences(): Preferensi {
    return this;
  }

  // Helper: hapus satu item dari salah satu daftar
  removeItem(kategori: keyof PreferensiData, item: string): Preferensi {
    this[kategori] = this[kategori].filter(
      (x) => x.toLowerCase() !== item.trim().toLowerCase()
    );
    return this;
  }

  // Helper: ubah ke objek polos untuk response API / disimpan ke database
  toJSON(): PreferensiJSON {
    return {
      userId: this.userId,
      allergies: [...this.allergies],
      dietRestrictions: [...this.dietRestrictions],
      foodPreferences: [...this.foodPreferences],
    };
  }

  // Helper: buat instance dari data mentah (mis. body request / row database)
  static fromJSON(json: Partial<PreferensiJSON> & { userId: string }): Preferensi {
    return new Preferensi(
      json.userId,
      json.allergies ?? [],
      json.dietRestrictions ?? [],
      json.foodPreferences ?? []
    );
  }

  // Trim, buang string kosong, dan hapus duplikat (tidak peka huruf besar/kecil)
  private static normalisasi(list: string[]): string[] {
    const terlihat = new Set<string>();
    const hasil: string[] = [];
    for (const item of list) {
      const bersih = String(item).trim();
      const kunci = bersih.toLowerCase();
      if (bersih && !terlihat.has(kunci)) {
        terlihat.add(kunci);
        hasil.push(bersih);
      }
    }
    return hasil;
  }
}

export default Preferensi;