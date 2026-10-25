// PIC: Yuri Mahdi Prasetya (103042310017)

import { Bahan_Makanan } from './Bahan_Makanan';

export class Menu_Makanan {
  // Atribut (+ public sesuai Tabel 3.3 DPPL)
  public menuId: string;
  public namaMenuMakan: string;
  public infoKalori: number;
  public infoProtein: number;
  public infoFats: number;
  public infoCarbs: number;
  public waktuMakan: string;
  public schedule: string;
  public kategoriMenu: string[];
  public bahanBahan: Bahan_Makanan[];

  constructor(
    menuId: string,
    namaMenuMakan: string,
    infoKalori: number,
    infoProtein: number,
    infoFats: number,
    infoCarbs: number,
    waktuMakan: string,
    schedule: string,
    kategoriMenu: string[] = [],
    bahanBahan: Bahan_Makanan[] = []
  ) {
    this.menuId = menuId;
    this.namaMenuMakan = namaMenuMakan;
    this.infoKalori = infoKalori;
    this.infoProtein = infoProtein;
    this.infoFats = infoFats;
    this.infoCarbs = infoCarbs;
    this.waktuMakan = waktuMakan;
    this.schedule = schedule;
    this.kategoriMenu = kategoriMenu;
    this.bahanBahan = bahanBahan;
  }

  // Method (+ public sesuai Tabel 3.3 DPPL)
  public editMenuMakan(menuId: string, menuMakananBaru: Partial<Menu_Makanan>): Menu_Makanan {
    if (this.menuId === menuId) {
      Object.assign(this, menuMakananBaru);
    }
    return this;
  }

  public deleteMenu(menuId: string): boolean {
    if (this.menuId === menuId) {
      return true;
    }
    return false;
  }

  public readMenuMakanan(menuId: string): Menu_Makanan {
    return this;
  }
}