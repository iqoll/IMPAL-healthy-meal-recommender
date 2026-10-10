// styles/global.ts
import { StyleSheet } from 'react-native';

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
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 0,
    paddingHorizontal: 20,    // Mengikuti standard margin-mobile (20px)[cite: 7]
  },
  title: {
    fontSize: 36,
    fontWeight: '900',        // Sesuai token display-hero-mobile[cite: 7]
    color: colors.text,
    letterSpacing: -0.03,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',        // Sesuai token label-md dengan tracking uppercase[cite: 7]
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