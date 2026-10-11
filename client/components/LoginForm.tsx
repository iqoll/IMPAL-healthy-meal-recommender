import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface LoginFormProps {
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  onForgotPassword?: () => void;
}

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  onForgotPassword,
}: LoginFormProps) {
  return (
    <View style={styles.formContainer}>
      {/* Email Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="person-outline"
            size={20}
            color="#9CA3AF"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="e.g janedoe@gmail.com"
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
            placeholder="****************"
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

      {/* Forgot Password Link */}
      <TouchableOpacity
        onPress={onForgotPassword}
        activeOpacity={0.7}
        style={styles.forgotContainer}
      >
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Jakarta-Regular',
    color: '#000000',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#FF6418',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 54,
  },
  inputIcon: {
    marginRight: 12,
  },
  textInput: {
    fontFamily: 'Jakarta-Regular',
    flex: 1,
    fontSize: 15,
    color: '#1b1c18',
  },
  forgotContainer: {
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  forgotText: {
    fontFamily: 'Jakarta-Regular',
    fontSize: 13,
    color: '#1b1c18',
  },
});