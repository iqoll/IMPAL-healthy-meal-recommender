import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, TextInput } from '@/shared/AppText';
import { colors, fonts } from '@/styles/global';

interface RegisterFormProps {
  nama: string;
  setNama: (text: string) => void;
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  repeatPassword: string;
  setRepeatPassword: (text: string) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  showRepeatPassword: boolean;
  setShowRepeatPassword: (show: boolean) => void;
}

export default function RegisterForm({
  nama,
  setNama,
  email,
  setEmail,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword,
  showPassword,
  setShowPassword,
  showRepeatPassword,
  setShowRepeatPassword,
}: RegisterFormProps) {
  return (
    <View style={styles.formContainer}>
      {/* Full Name Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="person-outline"
            size={20}
            color="#9CA3AF"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="e.g. Jane Doe"
            placeholderTextColor="#A8A29E"
            value={nama}
            onChangeText={setNama}
            autoCapitalize="words"
          />
        </View>
      </View>

      {/* Email Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="mail-outline"
            size={20}
            color="#9CA3AF"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="e.g. janedoe@gmail.com"
            placeholderTextColor="#A8A29E"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      {/* Password Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#9CA3AF"
            style={styles.inputIcon}
          />
          <TextInput
            style={[styles.textInput, { flex: 1 }]}
            placeholder="At least 6 characters"
            placeholderTextColor="#A8A29E"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Repeat Password Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Repeat Password</Text>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="shield-checkmark-outline"
            size={20}
            color="#9CA3AF"
            style={styles.inputIcon}
          />
          <TextInput
            style={[styles.textInput, { flex: 1 }]}
            placeholder="Re-enter your password"
            placeholderTextColor="#A8A29E"
            secureTextEntry={!showRepeatPassword}
            value={repeatPassword}
            onChangeText={setRepeatPassword}
          />
          <TouchableOpacity
            onPress={() => setShowRepeatPassword(!showRepeatPassword)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={showRepeatPassword ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 28,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: '#000000',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 54,
  },
  inputIcon: {
    marginRight: 12,
  },
  textInput: {
    fontFamily: fonts.regular,
    flex: 1,
    fontSize: 15,
    color: colors.text,
  },
});
