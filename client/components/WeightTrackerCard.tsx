// components/WeightTrackerCard.tsx
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '@/shared/AppText';
import { fonts, shadows } from '@/styles/global';

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
    ...shadows.card,
  },
  weightRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  weightValue: {
    fontSize: 38,
    fontFamily: fonts.extraBold,
    color: '#F65E01',          // Warna oranye utama
  },
  unitText: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: '#F65E01',
    marginLeft: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
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
    fontFamily: fonts.semiBold,
    color: '#F65E01',          // Warna oranye utama
  },
});