// Ukuran layout yang dipakai bersama di banyak screen

export const SCREEN_PADDING = 20;   // Margin kiri-kanan standar setiap screen

// Floating tab bar (bilah navigasi bawah)
export const TAB_BAR_HEIGHT = 75;
export const TAB_BAR_SIDE_MARGIN = 20;
const TAB_BAR_MIN_BOTTOM = 20;      // Jarak minimum dari bawah layar
const TAB_BAR_GAP = 8;              // Jarak di atas home indicator / tombol navigasi Android

// Jarak tab bar dari bawah layar, menyesuaikan area aman tiap device
// (home indicator iPhone, gesture bar / tombol navigasi Android)
export const getTabBarBottom = (safeAreaBottom: number) =>
  Math.max(safeAreaBottom + TAB_BAR_GAP, TAB_BAR_MIN_BOTTOM);
