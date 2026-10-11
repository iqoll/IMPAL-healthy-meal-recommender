import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
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