// app/(tabs)/_layout.tsx
import { Tabs, useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import CustomTabBarButton from '@/components/CustomTabButton';
import MainHeader from '@/shared/MainHeader';

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      backBehavior="history" // Tombol back di chat kembali ke tab sebelumnya
      screenOptions={{
        headerShown: true,
        header: () => (
          <MainHeader
            onProfilePress={() => router.push('/login')}
            onNotificationPress={() => router.push('/login')}
          />
        ),
        // Styling Bilah Navigasi Bawah (Floating Dock) sesuai spesifikasi Figma
        tabBarStyle: {
          position: 'absolute',
          bottom: 35,
          left: 20,
          right: 20,
          backgroundColor: '#0A130F',
          borderRadius: 20,
          height: 75,
          paddingHorizontal: 8,
          paddingVertical: 8,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#086317',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.2,
          shadowRadius: 15,
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}>
      
      {/* 1. Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={22} color={color} />
          ),
        }}
      />

      {/* 2. Calendar */}
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'calendar' : 'calendar-outline'} size={22} color={color} />
          ),
        }}
      />

      {/* 3. MasehAI */}
      <Tabs.Screen
        name="chat"
        options={{
          title: '',
          headerShown: false,
          tabBarStyle: { display: 'none' }, // Layar chat tampil penuh tanpa tab bar
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      {/* 4. Meals */}
      <Tabs.Screen
        name="meals"
        options={{
          title: 'Meals',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'food-fork-drink' : 'food-fork-drink'} size={22} color={color} />
          ),
        }}
      />

      {/* 5. Health */}
      <Tabs.Screen
        name="health"
        options={{
          title: 'Health',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'heart' : 'heart-outline'} size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}