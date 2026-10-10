// components/CustomTabBarButton.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
      <View style={styles.button}>
        <Ionicons name="chatbubble-outline" size={24} color="#000" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25, // Efek melayang ke atas
    borderWidth: 1,
    borderColor: '#333333',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});