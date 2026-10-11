// components/chat/RecipeCard.tsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '@/styles/global';
import { RecipeRecommendation } from '@/types/chat';

interface RecipeCardProps {
  recipe: RecipeRecommendation;
  onAddPress?: () => void;
  onRecipePress?: () => void;
}

interface MacroStatProps {
  label: string;
  value: string;
  color: string;
}

function MacroStat({ label, value, color }: MacroStatProps) {
  return (
    <View style={[styles.stat, { borderColor: color }]}>
      <Text style={[styles.statLabel, { color }]}>{label}</Text>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
    </View>
  );
}

export default function RecipeCard({ recipe, onAddPress, onRecipePress }: RecipeCardProps) {
  const proteinPercent = Math.round((recipe.protein / recipe.proteinTarget) * 100);

  return (
    <View style={styles.card}>
      {/* Judul Menu */}
      <Text style={styles.title}>{recipe.title}</Text>

      {/* Ringkasan Nutrisi */}
      <View style={styles.statRow}>
        <MacroStat label="Calories" value={`${recipe.calories}`} color={colors.calories} />
        <MacroStat label="Protein" value={`${recipe.protein}g`} color={colors.protein} />
        <MacroStat label="Fats" value={`${recipe.fats}g`} color={colors.fats} />
        <MacroStat label="Time" value={`${recipe.timeMinutes} min`} color={colors.time} />
      </View>

      {/* Progres Target Protein */}
      <View style={styles.progressPill}>
        <View style={styles.progressDot} />
        <View style={styles.progressContent}>
          <Text style={styles.progressText}>
            Hits {proteinPercent}% of {recipe.mealType} protein target
          </Text>
          <Text style={styles.progressValue}>
            {recipe.protein}g / {recipe.proteinTarget}g
          </Text>
        </View>
      </View>

      {/* Tombol Aksi */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.primaryButton} onPress={onAddPress} activeOpacity={0.8}>
          <Ionicons name="add" size={16} color="#FFFFFF" />
          <Text style={styles.primaryButtonText} numberOfLines={1}>Add to Daily Meals</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={onRecipePress} activeOpacity={0.8}>
          <Text style={styles.secondaryButtonText}>Recipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    padding: 16,
    marginTop: 14,
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    lineHeight: 24,
    color: colors.text,
    marginBottom: 14,
  },
  statRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 14,
  },
  stat: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: 'center',
  },
  statLabel: {
    fontFamily: fonts.regular,
    fontSize: 13,
  },
  statValue: {
    fontFamily: fonts.bold,
    fontSize: 15,
    marginTop: 2,
  },
  progressPill: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.successSoft,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.time,
    marginTop: 3,              // Sejajar dengan baris pertama teks (lineHeight 18)
    marginRight: 10,
  },
  progressContent: {
    flex: 1,
  },
  progressText: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 18,
    color: colors.text,
  },
  progressValue: {
    fontFamily: fonts.semiBold,
    fontSize: 12,
    lineHeight: 18,
    color: colors.success,
    marginTop: 2,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 1,             // Menyusut di layar sempit agar tidak keluar dari kartu
    height: 34,
    backgroundColor: colors.primary,
    borderRadius: 999,
    paddingHorizontal: 14,
    gap: 4,
  },
  primaryButtonText: {
    flexShrink: 1,
    fontFamily: fonts.semiBold,
    fontSize: 12,
    color: '#FFFFFF',
  },
  secondaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 34,
    backgroundColor: colors.muted,
    borderRadius: 999,
    paddingHorizontal: 20,
  },
  secondaryButtonText: {
    fontFamily: fonts.semiBold,
    fontSize: 12,
    color: colors.text,
  },
});
