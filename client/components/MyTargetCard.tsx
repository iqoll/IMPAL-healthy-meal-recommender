import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@/shared/AppText';
import { fonts, shadows } from '@/styles/global';

export default function MyTargetCard() {
  return (
    <View style={styles.container}>
      {/* Header Bagian Atas */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MY TARGET</Text>
        <Text style={styles.headerDate}>11 Oct 2026</Text>
      </View>

      {/* Kartu Oranye Utama */}
      <View style={styles.card}>
        {/* Bagian Calories */}
        <View style={styles.calorieSection}>
          <Text style={styles.calorieLabel}>Calories</Text>
          <Text style={styles.calorieValue}>
            180<Text style={styles.calorieTotal}>/2400 kcal</Text>
          </Text>
        </View>

        {/* Bar Progress Calories */}
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressFill, { width: '15%' }]} />
        </View>

        {/* Garis Pembatas */}
        <View style={styles.divider} />

        {/* Bagian Nutrisi (Protein, Carbs, Fats) */}
        <View style={styles.nutritionRow}>
          {/* Protein */}
          <View style={styles.nutritionItem}>
            <View style={styles.labelContainer}>
              <View style={[styles.dot, { backgroundColor: '#7ED321' }]} />
              <Text style={styles.nutritionLabel}>Protein</Text>
            </View>
            <Text style={styles.nutritionValue}>
              10<Text style={styles.nutritionTotal}>/30g</Text>
            </Text>
            <View style={styles.miniBarContainer}>
              <View style={[styles.miniBarFill, { width: '33%', backgroundColor: '#7ED321' }]} />
            </View>
          </View>

          {/* Carbs */}
          <View style={styles.nutritionItem}>
            <View style={styles.labelContainer}>
              <View style={[styles.dot, { backgroundColor: '#F8E71C' }]} />
              <Text style={styles.nutritionLabel}>Carbs</Text>
            </View>
            <Text style={styles.nutritionValue}>
              12<Text style={styles.nutritionTotal}>/250g</Text>
            </Text>
            <View style={styles.miniBarContainer}>
              <View style={[styles.miniBarFill, { width: '20%', backgroundColor: '#F8E71C' }]} />
            </View>
          </View>

          {/* Fats */}
          <View style={styles.nutritionItem}>
            <View style={styles.labelContainer}>
              <View style={[styles.dot, { backgroundColor: '#D0021B' }]} />
              <Text style={styles.nutritionLabel}>Fats</Text>
            </View>
            <Text style={styles.nutritionValue}>
              14<Text style={styles.nutritionTotal}>/65g</Text>
            </Text>
            <View style={styles.miniBarContainer}>
              <View style={[styles.miniBarFill, { width: '25%', backgroundColor: '#D0021B' }]} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: '#111111',
    letterSpacing: 0.5,
  },
  headerDate: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: '#FF7A00',
  },
  card: {
    backgroundColor: '#FF7A00', // Warna latar belakang oranye sesuai gambar
    borderRadius: 24,
    padding: 20,
    ...shadows.md,
  },
  calorieSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 12,
  },
  calorieLabel: {
    fontSize: 20,
    fontFamily: fonts.semiBold,
    color: '#FFFFFF',
  },
  calorieValue: {
    fontSize: 22,
    fontFamily: fonts.bold,
    color: '#FFFFFF',
  },
  calorieTotal: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: '#FFD1A9',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#FFD1A9',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 16,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFEE32', // Warna kuning indikator kalori
    borderRadius: 5,
  },
  divider: {
    height: 1.5,
    backgroundColor: '#FF9E4A',
    marginBottom: 20,
  },
  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nutritionItem: {
    flex: 1,
    marginHorizontal: 4,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  nutritionLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: fonts.medium,
  },
  nutritionValue: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  nutritionTotal: {
    fontSize: 11,
    fontFamily: fonts.regular,
    color: '#FFD1A9',
  },
  miniBarContainer: {
    height: 6,
    backgroundColor: '#FFD1A9',
    borderRadius: 3,
    overflow: 'hidden',
  },
  miniBarFill: {
    height: '100%',
    borderRadius: 3,
  },
});