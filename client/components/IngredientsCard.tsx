// components/IngredientsCard.tsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IngredientsCardProps {
  onPress?: () => void;
  onQuickLogPress?: () => void;
}

export default function IngredientsCard({ onPress, onQuickLogPress }: IngredientsCardProps) {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Kotak Lingkaran Ikon Plus */}
      <View style={styles.iconBox}>
        <Ionicons name="add" size={26} color="#F65E01" />
      </View>

      {/* Judul Kartu */}
      <Text style={styles.cardTitle}>Food ingredients</Text>

      {/* Tautan Quick Log */}
      <TouchableOpacity onPress={onQuickLogPress} activeOpacity={0.7} style={styles.quickLogButton}>
        <Text style={styles.quickLogText}>Quick Log</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FEFEDF', // Background warna kuning lembut sesuai referensi
    borderRadius: 28,          // Sudut melengkung halus khas Warm Kinetic Health
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#F65E01',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F65E01',          // Warna teks oranye utama
    marginBottom: 6,
    textAlign: 'center',
  },
  quickLogButton: {
    marginTop: 2,
  },
  quickLogText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#F65E01',          // Warna teks oranye
  },
});