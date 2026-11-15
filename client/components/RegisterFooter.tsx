import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Text } from '@/shared/AppText';
import { colors, fonts, shadows } from '@/styles/global';

interface RegisterFooterProps {
  onRegisterPress: () => void;
  isLoading: boolean;
  onLoginPress: () => void;
}

export default function RegisterFooter({
  onRegisterPress,
  isLoading,
  onLoginPress,
}: RegisterFooterProps) {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={[styles.submitButton, isLoading && styles.submitButtonDisabled]}
        onPress={onRegisterPress}
        disabled={isLoading}
        activeOpacity={0.85}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.submitButtonText}>Sign Up</Text>
        )}
      </TouchableOpacity>

      <View style={styles.loginRow}>
        <Text style={styles.loginTextNormal}>Already have an account? </Text>
        <TouchableOpacity onPress={onLoginPress} activeOpacity={0.7}>
          <Text style={styles.loginTextAction}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    marginTop: 'auto',
  },
  submitButton: {
    backgroundColor: '#111827',
    borderRadius: 9999,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
    marginBottom: 20,
  },
  submitButtonDisabled: {
    opacity: 0.7,
  },
  submitButtonText: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: '#FFFFFF',
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextNormal: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.textSecondary,
  },
  loginTextAction: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: colors.text,
  },
});
