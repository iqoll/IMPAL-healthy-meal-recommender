// components/CustomTabBarButton.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '@/shared/AppText';
import { fonts } from '@/styles/global';

interface CustomTabBarButtonProps {
  onPress?: (e: GestureResponderEvent) => void;
  accessibilityState?: { selected?: boolean };
}

export default function CustomTabBarButton({ onPress }: CustomTabBarButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      {/* Ikon Sparkle Kuning khas AI */}
      <Ionicons name="sparkles" size={22} color="#FFC800" />
      {/* Sama seperti label tab lain: tidak ikut membesar agar tab bar tetap rapi */}
      <Text style={styles.label} allowFontScaling={false}>MASEHAI</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 2,
  },
  label: {
    fontSize: 11,
    fontFamily: fonts.semiBold,
    color: '#FFFFFF',
    marginTop: 3,
  },
});
