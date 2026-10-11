// Pengganti Text & TextInput dari react-native agar tampilan teks konsisten di semua device.
// Pakai: import { Text, TextInput } from '@/shared/AppText';
import {
  StyleSheet,
  Text as RNText,
  TextInput as RNTextInput,
  TextInputProps,
  TextProps,
} from 'react-native';
import { colors, fonts } from '@/styles/global';

// Batas pembesaran font dari pengaturan aksesibilitas HP.
// Teks tetap bisa membesar sedikit, tapi tidak sampai merusak layout.
export const MAX_FONT_SCALE = 1.2;

export function Text({ style, ...props }: TextProps) {
  return (
    <RNText
      maxFontSizeMultiplier={MAX_FONT_SCALE}
      {...props}
      style={[styles.text, style]}
    />
  );
}

export function TextInput({ style, ...props }: TextInputProps) {
  return (
    <RNTextInput
      maxFontSizeMultiplier={MAX_FONT_SCALE}
      {...props}
      style={[styles.input, style]}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.regular,   // Default font, jadi tidak jatuh ke font sistem (Roboto/SF/Samsung)
    color: colors.text,
    includeFontPadding: false,   // Android: hilangkan padding ekstra agar sama dengan iOS
  },
  input: {
    fontFamily: fonts.regular,
    color: colors.text,
    includeFontPadding: false,
    paddingVertical: 0,          // Android memberi padding bawaan pada TextInput, iOS tidak
  },
});
