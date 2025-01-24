import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

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
}
const ListTodo = (props: IProps) => {
    const { todoList } = props;
    return (
        <>
            <FlatList data={todoList}
                keyExtractor={item => item.id + ""}
                renderItem={({ item }) => {
                    return (
                        <Text key={item.id} style={styles.todo}>
                            {item.title}
                        </Text>
                    )
                }}
            />
        </>
    )
}

export default ListTodo