import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, shadows } from '@/styles/global';
import MASEH from '@/assets/images/MASEH.png';

interface MainHeaderProps {
  onProfilePress?: () => void;
  onNotificationPress?: () => void;
}

export default function MainHeader({
  onProfilePress,
  onNotificationPress,
}: MainHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: Math.max(insets.top, 16) + 8 }]}>
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
        <Image 
          source={MASEH} 
          style={styles.logo} 
          resizeMode="contain" 
        />
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
    paddingBottom: 12,
    backgroundColor: colors.background,
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
    ...shadows.sm,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 70,
    height: 40,
  },
});