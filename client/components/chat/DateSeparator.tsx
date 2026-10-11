import { Text, StyleSheet } from 'react-native';
import { colors, fonts } from '@/styles/global';

interface DateSeparatorProps {
  date: Date;
}

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

// Contoh hasil: "Today, 8 Oct 2026" atau "7 Oct 2026"
export function formatChatDate(date: Date) {
  const formatted = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return isSameDay(date, new Date()) ? `Today, ${formatted}` : formatted;
}

export default function DateSeparator({ date }: DateSeparatorProps) {
  return <Text style={styles.text}>{formatChatDate(date)}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.regular,
    fontSize: 17,
    color: colors.text,
    textAlign: 'center',
    marginVertical: 16,
  },
});
