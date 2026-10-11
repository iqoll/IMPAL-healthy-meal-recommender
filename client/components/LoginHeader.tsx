import { View, Image, StyleSheet } from 'react-native';
import { Text } from '@/shared/AppText';

export default function LoginHeader() {
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
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>
          We happy to see you here again, enter your email address and password
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoImage: {
    width: 70,
    height: 20,
  },
  headerContainer: {
    marginBottom: 28,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Jakarta-Bold',
    color: '#1b1c18',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Jakarta-Regular',
    color: '#5a4137',
    lineHeight: 20,
  },
});