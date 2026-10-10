
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/styles/global';
import Badge from '@/shared/Badge';

interface GreetingSectionProps {
  dateText?: string;
  userName?: string;
}

const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  }).toUpperCase();

export default function GreetingSection({
  dateText = currentDate,
  userName = 'Nama Panjang',
}: GreetingSectionProps) {
  return (
    <View style={styles.container}>
      {/* Menggunakan Shared Badge dengan dot hijau */}
      <Badge 
        label={dateText}
        backgroundColor="#DCFCE7"
        textColor={colors.primary}
        borderColor="#BBF7D0"
        dotColor="#16A34A"
      />

      {/* Teks Sapaan */}
      <Text style={styles.greetingTitle}>
        Hello, {'\n'}
        <Text style={styles.nameText}>{userName}!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  greetingTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 36,
    marginTop: 12,
  },
  nameText: {
    color: colors.text,
  },
});