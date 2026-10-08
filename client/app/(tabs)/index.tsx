import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '@/styles/global';

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>NutriAI</Text>
      <Text style={styles.date}>Thursday, October 08</Text>
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