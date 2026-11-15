import { View, Image, StyleSheet } from 'react-native';
import { Text } from '@/shared/AppText';
import { colors, fonts } from '@/styles/global';

export default function RegisterHeader() {
  return (
    <View>
      {/* Logo MASEH */}
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/MASEH.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Header Teks */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Sign up today and get personalized healthy meal recommendations tailored just for you.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoImage: {
    width: 70,
    height: 20,
  },
  headerContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.bold,
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
