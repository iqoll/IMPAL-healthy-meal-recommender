//Muhammad Fathan Yusrizal 1304221036
// Interface tambahan sebagai representasi tipe data MenuMakanan

import { Menu_Makanan } from "./Menu_Makanan";

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

  public rekomenMenu(query: string): Menu_Makanan[] {
    // Logika untuk merekomendasikan daftar menu berdasarkan query
    return [];
  }

public generateMenu(): Menu_Makanan {
    return new Menu_Makanan(
      'MENU-001',
      'Tumis Dada Ayam Brokoli',
      450,
      42,
      12,
      40,
      'Makan Siang',
      '12:30',
      ['Tinggi Protein', ' Sehat'],
      []
    );
  }

  public searchMenu(): Menu_Makanan {
    return this.generateMenu();
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