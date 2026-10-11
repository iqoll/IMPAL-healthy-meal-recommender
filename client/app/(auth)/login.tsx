// app/(auth)/login.tsx
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/styles/global';
import LoginHeader from '@/components/LoginHeader';
import LoginForm from '@/components/LoginForm';
import LoginFooter from '@/components/LoginFooter';

export default function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Login dengan:', email, password);
    router.replace('/(tabs)');
  };

  return (
    // 'padding' di kedua platform, sama seperti layar chat (Android edge-to-edge)
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          // Jarak atas/bawah menyesuaikan notch, dynamic island, dan navigasi bawah tiap device
          { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <LoginHeader />
        
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          onForgotPassword={() => console.log('Forgot password clicked')}
        />
        
        <LoginFooter
          onLoginPress={handleLogin}
          onSignUpPress={() => router.push('/login')}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
});