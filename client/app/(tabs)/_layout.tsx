// app/(tabs)/_layout.tsx
import { Tabs, useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomTabBarButton from '@/components/CustomTabButton';
import MainHeader from '@/shared/MainHeader';
import { fonts, shadows } from '@/styles/global';
import { TAB_BAR_HEIGHT, TAB_BAR_SIDE_MARGIN, getTabBarBottom } from '@/constants/layout';

export default function TabLayout() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

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
          bottom: getTabBarBottom(insets.bottom), // Di atas home indicator / tombol navigasi Android
          // Pakai start/end, bukan left/right: style bawaan React Navigation memakai start: 0 & end: 0,
          // dan di native start/end mengalahkan left/right sehingga bar menempel ke tepi layar
          start: TAB_BAR_SIDE_MARGIN,
          end: TAB_BAR_SIDE_MARGIN,
          backgroundColor: '#0A130F',
          borderRadius: 20,
          height: TAB_BAR_HEIGHT,
          paddingHorizontal: 8,
          paddingTop: 8,
          paddingBottom: 8, // Wajib eksplisit: React Navigation menambah paddingBottom = safe area, ikon jadi terdesak di iPhone
          borderTopWidth: 0,
          elevation: 0, // Matikan elevation bawaan (8) agar di Android hanya boxShadow yang tampil
          ...shadows.tabBar,
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: fonts.semiBold,
        },
        tabBarAllowFontScaling: false, // Ukuran tab bar tetap, label tidak ikut membesar
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