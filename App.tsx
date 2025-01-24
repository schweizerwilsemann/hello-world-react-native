
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';

export default function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([])

  const randomMinMax = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const addTodo = (text: string) => {
    alert(text);
    const todo = { id: randomMinMax(1, 100000000), title: text };
    setTodoList([...todoList, todo])
  }
  return (
    <View style={styles.container}>
      <InputTodo
        addTodo={addTodo}
      />
      <ListTodo todoList={todoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 90,
    paddingHorizontal: 20,
    fontSize: 60,
    color: "red",
    marginTop: 50
  },
});
