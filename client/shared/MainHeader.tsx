// components/MainHeader.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MainHeaderProps {
  onProfilePress?: () => void;
  onNotificationPress?: () => void;
}

export default function MainHeader({
  onProfilePress,
  onNotificationPress,
}: MainHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Tombol Profil di Kiri */}
      <TouchableOpacity 
        onPress={onProfilePress} 
        style={styles.iconButton} 
        activeOpacity={0.7}
      >
        <Ionicons name="person-outline" size={20} color="#1E293B" />
      </TouchableOpacity>

      {/* Logo & Nama Aplikasi di Tengah */}
      <View style={styles.logoContainer}>
        <View style={styles.logoBadge}>
          <Ionicons name="sparkles" size={14} color="#FFFFFF" />
        </View>
        <Text style={styles.logoText}>NutriAI</Text>
      </View>

      {/* Tombol Notifikasi di Kanan */}
      <TouchableOpacity 
        onPress={onNotificationPress} 
        style={styles.iconButton} 
        activeOpacity={0.7}
      >
        <Ionicons name="notifications-outline" size={20} color="#1E293B" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoBadge: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#059669', // Warna hijau ikon NutriAI
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F172A',
    letterSpacing: -0.5,
  },
});