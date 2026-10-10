import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from '@/styles/global';
import MainHeader from '@/shared/MainHeader';
import GreetingSection from '@/components/GreetingSection';

export default function HomeScreen() {
  const router = useRouter();

 const goToLogin = () => {
  router.push('/login');
 }

  return (
    <View style={globalStyles.container}>
      <MainHeader 
        onProfilePress={goToLogin} // Perlu diganti nanti ke Profile
        onNotificationPress={goToLogin} // Perlu diganti nanti ke Notifications
      />
      <GreetingSection userName='Muhammad Haiqal'/>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    color: '#a0a0b0',
    marginTop: 4,
    marginBottom: 30,
  },
});