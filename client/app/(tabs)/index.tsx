import { View, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from '@/styles/global';
import GreetingSection from '@/components/GreetingSection';
import IngredientsCard from '@/components/IngredientsCard';
import WeightTrackerCard from '@/components/WeightTrackerCard';
import MyTargetCard from '@/components/MyTargetCard';
import { useTabBarSpace } from '@/hooks/useTabBarSpace';

export default function HomeScreen() {
  const router = useRouter();
  const tabBarSpace = useTabBarSpace();

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={{ paddingBottom: tabBarSpace }} // Konten paling bawah tidak tertutup tab bar
      showsVerticalScrollIndicator={false}
    >
      <GreetingSection userName='Jane Doe'/>
      
      <View style={styles.quickActionContainer}>
        <IngredientsCard 
          onPress={() => router.push('/login')} // nanti diganti ke 
          onQuickLogPress={() => router.push('/login')}
        />
        <WeightTrackerCard
          onPress={() => router.push('/login')} // nanti diganti ke 
        />
      </View>
      <MyTargetCard />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  quickActionContainer: {
    flexDirection: 'row',
    gap: 12,           // Memberikan jarak antar kedua kartu
    marginVertical: 12,
  },
});