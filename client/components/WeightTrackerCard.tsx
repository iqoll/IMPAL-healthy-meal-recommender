// components/WeightTrackerCard.tsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface WeightTrackerCardProps {
  weight?: string;
  onPress?: () => void;
}

export default function WeightTrackerCard({ weight = '0.0', onPress }: WeightTrackerCardProps) {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Nilai Berat Badan & Satuan */}
      <View style={styles.weightRow}>
        <Text style={styles.weightValue}>{weight}</Text>
        <Text style={styles.unitText}>kg</Text>
      </View>

      {/* Judul Kartu */}
      <Text style={styles.cardTitle}>weight</Text>
      
      {/* Indikator Tap to Update dengan Ikon Pensil */}
      <View style={styles.updateContainer}>
        <Ionicons name="create-outline" size={14} color="#F65E01" style={styles.updateIcon} />
        <Text style={styles.updateText}>tap to update</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FEFEDF', // Background kuning lembut
    borderRadius: 28,          // Sudut melengkung halus
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  weightRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  weightValue: {
    fontSize: 38,
    fontWeight: '800',
    color: '#F65E01',          // Warna oranye utama
  },
  unitText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F65E01',
    marginLeft: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F65E01',          // Warna oranye utama
    marginBottom: 14,
  },
  updateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  updateIcon: {
    marginRight: 4,
  },
  updateText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#F65E01',          // Warna oranye utama
  },
});