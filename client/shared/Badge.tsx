import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface BadgeProps {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  dotColor?: string;                         // Jika diisi, akan menampilkan titik (dot) di kiri
  iconName?: keyof typeof Ionicons.glyphMap; // Jika diisi, akan menampilkan ikon dari @expo/vector-icons
  iconSize?: number;
  iconColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Badge({
  label,
  backgroundColor = '#DCFCE7', // Default: soft mint green
  textColor = '#166534',       // Default: dark green text
  borderColor = '#BBF7D0',
  dotColor,
  iconName,
  iconSize = 14,
  iconColor,
  style,
  textStyle,
}: BadgeProps) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor, borderColor: borderColor || backgroundColor },
        style,
      ]}
    >
      {/* 1. Render Dot jika dotColor diberikan */}
      {dotColor && (
        <View style={[styles.dot, { backgroundColor: dotColor }]} />
      )}

      {/* 2. Render Icon jika iconName diberikan */}
      {iconName && (
        <Ionicons
          name={iconName}
          size={iconSize}
          color={iconColor || textColor}
          style={styles.icon}
        />
      )}

      {/* 3. Teks Badge */}
      <Text style={[styles.text, { color: textColor }, textStyle]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 9999, // Pill shape (rounded-full)
    borderWidth: 1,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 8,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});