import { colors } from "@/styles/global";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

export default function LoginScreen() {
    const router = useRouter();

    const goToHome = () => {
        router.push('/(tabs)');
    }
    return (
       <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}> 
            <View style={styles.logoContainer}>
                <View style={styles.logoBox}>
                    <Ionicons name="leaf" size={28} color="#FFFFFF" />
                </View>
            </View>
            <View>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>
                    Welcome back to NutriAI! Track your daily nutrition and meal goals.
                </Text>
                <Button title="Login" onPress={goToHome} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
    flexGrow: 1,
    backgroundColor: '#FAFBFF',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
    },
    logoContainer: {
    marginBottom: 20,
  },
  logoBox: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#006B2C', // Botanical Green
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#006B2C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 28,
    lineHeight: 20,
  },
})