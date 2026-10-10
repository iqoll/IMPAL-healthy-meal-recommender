import { View, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from '@/styles/global';
import GreetingSection from '@/components/GreetingSection';
import IngredientsCard from '@/components/IngredientsCard';
import WeightTrackerCard from '@/components/WeightTrackerCard';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView 
      style={globalStyles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <GreetingSection userName='Muhammad Haiqal'/>
      
      <View style={styles.quickActionContainer}>
        <IngredientsCard 
          onPress={() => router.push('/login')} // nanti diganti ke 
          onQuickLogPress={() => router.push('/login')}
        />
        <WeightTrackerCard
          onPress={() => router.push('/login')} // nanti diganti ke 
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 32,
  },
  quickActionContainer: {
    flexDirection: 'row',
    gap: 12,           // Memberikan jarak antar kedua kartu
    marginVertical: 12,
  },
});