import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: "pink",
        marginBottom: 20,
        marginTop: 10,
        padding: 10
    }
})

interface IProps {
    todoList: ITodo[];
    deleteTodo: (v: number) => void;
}
const ListTodo = (props: IProps) => {
    const { todoList, deleteTodo } = props;
    return (
        <>
            <FlatList data={todoList}
                keyExtractor={item => item.id + ""}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => deleteTodo(item.id)}
                        >
                            <Text
                                key={item.id}
                                style={styles.todo}

                            >
                                {item.title}
                            </Text>

                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

export default ListTodo