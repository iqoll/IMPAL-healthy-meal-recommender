
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/styles/global';

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
      {/* Teks Sapaan */}
      <Text style={styles.greetingTitle}>
        Hello, <Text style={styles.nameText}>{userName}!</Text> {'\n'}
        <Text style={styles.quotes}>Let's make your diet count</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  greetingTitle: {
    fontFamily: 'Jakarta-Regular',
    fontSize: 28,
    fontWeight: '400',
    color: colors.text,
    lineHeight: 36,
    marginTop: 12,
  },
  nameText: {
    color: colors.text,
  },
  quotes: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
});