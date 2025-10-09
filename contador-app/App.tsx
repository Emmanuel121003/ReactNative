import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Contador</Text>
  
      <Text style={styles.textHuge}>{count}</Text>

      <Pressable
        style={[styles.floatingButton, styles.leftButton, { backgroundColor: 'red' }]}
        onPress={() => setCount(count - 1)}
      >
        <Text style={styles.buttonText}>-1</Text>
      </Pressable>

   
      <Pressable
        style={[styles.floatingButton, styles.rightButton, { backgroundColor: 'green' }]}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>+1</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textHuge: {
    fontSize: 120,
    fontWeight: '200',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  leftButton: {
    left: 20,
  },
  rightButton: {
    right: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
