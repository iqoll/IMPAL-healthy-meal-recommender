import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/styles/global';

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
      {/* Kotak Ikon Plus */}
      <View style={styles.iconBox}>
        <Ionicons name="add" size={24} color={colors.text} />
      </View>

      {/* Judul Kartu */}
      <Text style={styles.cardTitle}>food ingredients</Text>

      {/* Tombol Tautan Quick Log */}
      <TouchableOpacity onPress={onQuickLogPress} activeOpacity={0.7}>
        <Text style={styles.quickLogText}>+ Quick log</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20, // Sesuai token rounded-xl
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
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#F8FAF6', // Porcelain tint
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#131b2e',
    marginBottom: 8,
    textAlign: 'center',
  },
  quickLogText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#16A34A', // Botanical green
  },
});