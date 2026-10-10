import { Tabs, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import CustomTabBarButton from '@/components/CustomTabButton';
import MainHeader from '@/shared/MainHeader';

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        header: () => (
          <MainHeader
            onProfilePress={() => router.push('/login')} // nanti sesuaikan ke /profile
            onNotificationPress={() => router.push('/login')}
          />
        ),
      }}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="calendar" options={{ title: 'Calendar' }} />
      <Tabs.Screen
        name="chat"
        options={{
          title: '',
          headerShown: false, // Sembunyikan header jika chat memiliki header sendiri
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tabs.Screen name="meals" options={{ title: 'Meals' }} />
      <Tabs.Screen name="health" options={{ title: 'Health' }} />
    </Tabs>
  );
}
