
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>("a");

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Learn React.js" },
    { id: 3, title: "Watching netflix" },
    { id: 4, title: "Watching youtube" },
    { id: 5, title: "Watching bilibili" },
    { id: 6, title: "Watching douyin" },
    { id: 7, title: "Watching tiktok" },
    { id: 8, title: "Serf Facebook" },
    { id: 9, title: "Watching Instagram" },
    { id: 110, title: "Watching xxx" },
  ])
  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 40 }}>
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
      <Button title='Add new' onPress={() => alert("tap me")} />
      <ScrollView>
        {todoList.map(todo => {
          return (
            <Text key={todo.id} style={styles.todo}>
              {todo.title}
            </Text>
          )
        })}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 20,
    marginTop: 10,
    padding: 10
  },
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
