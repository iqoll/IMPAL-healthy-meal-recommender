import { StyleSheet } from 'react-native';

// Diperbarui berdasarkan token warna dan desain NutriAI Health
export const colors = {
  background: '#F8FAF6',      // Background porcelain hangat
  header: '#FFFFFF',          // Permukaan putih bersih[cite: 4]
  surface: '#FFFFFF',         // Card surface white[cite: 4]
  primary: '#006b2c',         // Fresh botanical green (Primary brand)[cite: 4]
  secondary: '#F97316',       // Sunset tangerine (Secondary accent)[cite: 4]
  tertiary: '#0EA5E9',        // Clear marine blue (Hydration/Tertiary)[cite: 4]
  text: '#131b2e',            // Deep slate charcoal (On-background)[cite: 4]
  textSecondary: '#64748B',   // Slate grey untuk teks sekunder[cite: 4]
  alert: '#ba1a1a',           // Error / alert red[cite: 4]
  border: '#E2E8F0',          // Hairline surface border[cite: 4]
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 0,
    paddingHorizontal: 16,     // Mengikuti standard screen margin compact viewport (16px)[cite: 4]
  },
  title: {
    fontSize: 28,
    fontWeight: '700',         // Sesuai token display-lg-mobile[cite: 4]
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',         // Sesuai token title-md[cite: 4]
    color: colors.text,
    marginTop: 30,
    marginBottom: 16,
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