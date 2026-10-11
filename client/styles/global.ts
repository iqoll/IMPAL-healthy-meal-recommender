import { StyleSheet } from 'react-native';
import { SCREEN_PADDING } from '@/constants/layout';

// Diperbarui berdasarkan token warna dan desain Warm Kinetic Health
export const colors = {
  background: '#fbfaf2',      // Canvas root: warm ivory background
  header: '#ffffff',          // Pure surface white untuk card/header
  surface: '#ffffff',         // Surface container lowest / card surface
  primary: '#FF6418',         // Primary Brand Accent: energetic citrus orange[cite: 7]
  secondary: '#fed01b',       // Secondary container: yellow gold glow[cite: 7]
  tertiary: '#575e70',        // Tertiary accent color[cite: 7]
  text: '#1b1c18',            // On-background deep charcoal text[cite: 7]
  textSecondary: '#5a4137',   // On-surface-variant untuk teks sekunder[cite: 7]
  alert: '#ba1a1a',           // Error / alert red[cite: 7]
  border: '#e3e3db',          // Surface variant / border line[cite: 7]
  cream: '#FEFEDF',           // Latar lembut untuk kartu Home & area chat
  muted: '#E8E8E8',           // Tombol sekunder abu-abu
  // Warna per jenis nutrisi (kartu rekomendasi menu)
  calories: '#1E9BE8',
  protein: '#D21F1F',
  fats: '#F2B705',
  time: '#8DC63F',
  success: '#6AA121',         // Teks progres target tercapai
  successSoft: '#F1F7E8',     // Latar pill progres
};

// Nama family sesuai yang didaftarkan di app/_layout.tsx (useFonts)
// Pakai fontFamily ini, bukan fontWeight — fontWeight + font custom bisa tampil beda di Android.
export const fonts = {
  regular: 'Jakarta-Regular',
  medium: 'Jakarta-Medium',
  semiBold: 'Jakarta-SemiBold',
  bold: 'Jakarta-Bold',
  extraBold: 'Jakarta-ExtraBold',
};

// boxShadow tampil sama di iOS & Android (shadow* hanya iOS, elevation hanya Android)
export const shadows = {
  sm: { boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)' },
  card: { boxShadow: '0px 4px 12px rgba(15, 23, 42, 0.04)' },
  md: { boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)' },
  lg: { boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.12)' },
  tabBar: { boxShadow: '0px 10px 15px rgba(8, 99, 23, 0.2)' },
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 0,
    paddingHorizontal: SCREEN_PADDING, // Mengikuti standard margin-mobile (20px)[cite: 7]
  },
  title: {
    fontSize: 36,
    fontFamily: fonts.extraBold, // Sesuai token display-hero-mobile[cite: 7]
    color: colors.text,
    letterSpacing: -0.03,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: fonts.bold,   // Sesuai token label-md dengan tracking uppercase[cite: 7]
    color: colors.textSecondary,
    marginTop: 24,
    marginBottom: 12,
    letterSpacing: 0.04,
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});