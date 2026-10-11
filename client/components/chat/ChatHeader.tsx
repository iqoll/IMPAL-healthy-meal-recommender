// components/chat/ChatHeader.tsx
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/styles/global';
import MASEH from '@/assets/images/MASEH.png';

interface ChatHeaderProps {
  onBackPress?: () => void;
  onMenuPress?: () => void;
}

export default function ChatHeader({ onBackPress, onMenuPress }: ChatHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
      {/* Tombol Kembali di Kiri */}
      <TouchableOpacity onPress={onBackPress} style={styles.iconButton} activeOpacity={0.7} hitSlop={8}>
        <Ionicons name="chevron-back" size={26} color={colors.text} />
      </TouchableOpacity>

      {/* Logo di Tengah */}
      <Image source={MASEH} style={styles.logo} resizeMode="contain" />

      {/* Tombol Menu di Kanan */}
      <TouchableOpacity onPress={onMenuPress} style={styles.iconButton} activeOpacity={0.7} hitSlop={8}>
        <Ionicons name="ellipsis-vertical" size={20} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 14,
    backgroundColor: colors.surface,
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 70,
    height: 40,
  },
});
