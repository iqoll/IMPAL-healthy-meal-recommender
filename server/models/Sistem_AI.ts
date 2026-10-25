//Muhammad Fathan Yusrizal 1304221036
// Interface tambahan sebagai representasi tipe data MenuMakanan
export interface MenuMakanan {
  id: string;
  nama: string;
  kalori: number;
}

export class Sistem_AI {
  // Atribut berdasarkan class diagram
  public modelAI: string;
  public chatHistory: string[];
  public contextMemory: Map<string, any>;

  constructor(modelAI: string = "default-model") {
    this.modelAI = modelAI;
    this.chatHistory = [];
    this.contextMemory = new Map<string, any>();
  }

  // Metode-metode berdasarkan class diagram
  public processQuery(query: string): string {
    this.chatHistory.push(query);
    // Logika pemrosesan AI (misalnya memanggil API model AI)
    return "Contoh teks balasan dari AI";
  }

  public rekomenMenu(query: string): MenuMakanan[] {
    // Logika untuk merekomendasikan daftar menu berdasarkan query
    return [];
  }

  public generateMenu(): MenuMakanan {
    // Logika untuk membuat/menghasilkan satu menu baru
    return {
      id: "M001",
      nama: "Grilled Lemon Herb Chicken & Avocado Bowl",
      kalori: 480
    };
  }

  public searchMenu(): MenuMakanan {
    // Logika untuk mencari menu tertentu
    return {
      id: "M002",
      nama: "Hasil Pencarian Menu",
      kalori: 300
    };
  }

  public loadKonteksData(userId: string): void {
    // Logika untuk memuat riwayat atau konteks spesifik pengguna ke contextMemory
    console.log(`Memuat data konteks untuk pengguna dengan ID: ${userId}`);
  }

  public clearChatHistory(): void {
    // Logika untuk menghapus riwayat percakapan
    this.chatHistory = [];
  }
}