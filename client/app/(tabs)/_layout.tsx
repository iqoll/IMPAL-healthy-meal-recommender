import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import CustomTabBarButton from '@/components/CustomTabButton';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: '',
          tabBarButton: (props) => <CustomTabBarButton {...props} /> 
        }}
      />
      <Tabs.Screen
        name="meals"
        options={{
          title: 'Meals',
        }}
      />
      <Tabs.Screen
        name="health"
        options={{
          title: 'Health',
        }}
      />
    </Tabs>
  );
}
