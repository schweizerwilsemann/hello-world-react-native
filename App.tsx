
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>("a");

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          onChangeText={value => setName(value)}
          style={{
            borderColor: 'violet',
            borderWidth: 1,
            padding: 10,
          }}
          autoCapitalize='none'
        //keyboardType='numeric' 
        />
      </View>
      <Text>
        Hello world in React Native!
        <Text style={styles.name}>I'm {name}</Text>
      </Text>
      <Button title='Add new' />
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
