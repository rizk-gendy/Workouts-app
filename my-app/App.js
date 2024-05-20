import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json'

export default function App() {
  return (
    <View style={styles.container}>
      {exercises.map((exercise) => (
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>{exercise.name} </Text>
          <Text style={styles.exerciseSubtitle}>{exercise.type.toLocaleUpperCase()} | {exercise.difficulty.toLocaleUpperCase()} </Text>
        </View>
      ))}




      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  exerciseContainer: {
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    gap:10
  },
  exerciseName: {
    fontSize: 28, fontWeight: 500
  },

  exerciseSubtitle: {
    color: 'dimgray'
  },
});
