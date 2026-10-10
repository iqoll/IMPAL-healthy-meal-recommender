import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
      {/* Nilai Berat Badan */}
      <Text style={styles.weightValue}>
        {weight}<Text style={styles.unitText}>kg</Text>
      </Text>

      {/* Judul Kartu */}
      <Text style={styles.cardTitle}>weight</Text>
      
      {/* Tombol/Indikator Tap to Update */}
      <View style={styles.updateContainer}>
        <MaterialCommunityIcons name="scale" size={14} color="#64748B" style={styles.updateIcon} />
        <Text style={styles.updateText}>Tap to update</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  weightValue: {
    fontSize: 36,
    fontWeight: '700',
    color: '#131b2e',
    marginBottom: 2,
  },
  unitText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#131b2e',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#64748B',
    marginBottom: 16,
  },
  updateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAF6',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 9999, // Pill shape
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  updateIcon: {
    marginRight: 4,
  },
  updateText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#64748B',
  },
});