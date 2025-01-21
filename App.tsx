
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>("Khoa");

  const [age, setAge] = useState<number>(21);

  const [person, setPerson] = useState<{
    name: string;
    age: number;
  }>({
    name: "Khoa",
    age: 23
  })
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{JSON.stringify(person)}</Text>

      </View>
      <Text>
        Hello world in React Native!
        <Text style={styles.name}>I'm {name}</Text>
        <Text style={styles.age}>I'm {age} years old</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  age: {
    fontSize: 20,
    color: 'orange'
  },
  name: {
    fontSize: 40,
    color: 'blue'
  },
  text: {
    color: 'green',
    fontSize: 40
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 90,
    paddingHorizontal: 40
  },
});
