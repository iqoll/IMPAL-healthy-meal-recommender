// app/(auth)/login.tsx
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
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
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Peringatan', 'Email dan password tidak boleh kosong');
      return;
    }

    setIsLoading(true);
    try {
      // Ambil IP host komputer secara otomatis dari Metro bundler jika berjalan via Expo Go / device fisik
      const debuggerHost = Constants.expoConfig?.hostUri;
      const hostIp = debuggerHost ? debuggerHost.split(':')[0] : '192.168.100.13';
      const API_URL = `http://${hostIp}:3000/api/auth/login`;
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        // Jika sukses, tampilkan pesan dan arahkan ke halaman utama
        const userName = result.user?.nama || result.data?.nama || 'Pengguna';
        Alert.alert('Sukses', `Selamat datang, ${userName}!`);
        router.replace('/(tabs)');
      } else {
        // Jika password salah atau email tidak ditemukan
        Alert.alert('Gagal Login', result.message || 'Email atau password salah');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Gagal terhubung ke server. Pastikan backend aktif.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // 'padding' di kedua platform, sama seperti layar chat (Android edge-to-edge)
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
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
          onForgotPassword={() => Alert.alert('Info', 'Fitur lupa password belum tersedia')}
        />
        
        <LoginFooter
          onLoginPress={handleLogin}
          isLoading={isLoading}
          onSignUpPress={() => router.push('/(auth)/login')}
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