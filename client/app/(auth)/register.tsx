// app/(auth)/register.tsx
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { colors } from '@/styles/global';
import RegisterHeader from '@/components/RegisterHeader';
import RegisterForm from '@/components/RegisterForm';
import type { FormErrors } from '@/components/RegisterForm';
import RegisterFooter from '@/components/RegisterFooter';
import { validateRegisterForm } from '@/utils/validation';

export default function RegisterScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // State untuk menampung pesan error inline per field
  const [errors, setErrors] = useState<FormErrors>({
    nama: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleRegister = async () => {
    // ============================================================
    // Validasi input menggunakan RegEx dari utils/validation.ts
    // ============================================================
    const validation = validateRegisterForm(nama, email, password, repeatPassword);

    // Set error messages untuk setiap field (kosong jika valid)
    setErrors({
      nama: validation.nama.message,
      email: validation.email.message,
      password: validation.password.message,
      repeatPassword: validation.repeatPassword.message,
    });

    // Hentikan proses jika ada field yang tidak lolos validasi
    if (!validation.isAllValid) {
      return;
    }

    setIsLoading(true);
    try {
      // Ambil IP host komputer secara otomatis dari Metro bundler jika berjalan via Expo Go / device fisik
      const debuggerHost = Constants.expoConfig?.hostUri;
      const hostIp = debuggerHost ? debuggerHost.split(':')[0] : '192.168.100.13';
      const API_URL = `http://${hostIp}:3000/api/auth/register`;

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nama: nama.trim(),
          email: email.trim(),
          password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert(
          'Sukses',
          result.message || 'Registrasi berhasil! Silakan masuk dengan akun baru Anda.',
          [
            {
              text: 'OK',
              onPress: () => router.replace('/(auth)/login'),
            },
          ]
        );
      } else {
        Alert.alert('Gagal Registrasi', result.message || 'Terjadi kesalahan saat pendaftaran');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Gagal terhubung ke server. Pastikan backend aktif.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          { paddingTop: insets.top + 20, paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <RegisterHeader />

        <RegisterForm
          nama={nama}
          setNama={setNama}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          repeatPassword={repeatPassword}
          setRepeatPassword={setRepeatPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showRepeatPassword={showRepeatPassword}
          setShowRepeatPassword={setShowRepeatPassword}
          errors={errors}
        />

        <RegisterFooter
          onRegisterPress={handleRegister}
          isLoading={isLoading}
          onLoginPress={() => router.push('/(auth)/login')}
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
