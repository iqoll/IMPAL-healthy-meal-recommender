import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '@/shared/AppText';
import { shadows } from '@/styles/global';

interface LoginFooterProps {
  onLoginPress: () => void;
  onSignUpPress: () => void;
}

export default function LoginFooter({ onLoginPress, onSignUpPress }: LoginFooterProps) {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={onLoginPress}
        activeOpacity={0.85}
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Footer Sign Up */}
      <View style={styles.signupRow}>
        <Text style={styles.signupTextNormal}>Don’t have an account? </Text>
        <TouchableOpacity onPress={onSignUpPress} activeOpacity={0.7}>
          <Text style={styles.signupTextAction}>Sign Up</Text>
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
  loginButton: {
    backgroundColor: '#111827',
    borderRadius: 9999,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
    marginBottom: 20,
  },
  loginButtonText: {
    fontFamily: 'Jakarta-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupTextNormal: {
    fontFamily: 'Jakarta-Regular',
    fontSize: 14,
    color: '#5a4137',
  },
  signupTextAction: {
    fontFamily: 'Jakarta-SemiBold',
    fontSize: 14,
    color: '#1b1c18',
  },
});