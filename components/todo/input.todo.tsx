import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    todoInput: {
        borderColor: 'violet',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
    }
})
interface IProps {
    addTodo: (value: string) => void;
}
const InputTodo = (props: IProps) => {
    const { addTodo } = props;
    const [name, setName] = useState<string>("");

    const handleAddNewTodo = () => {
        addTodo(name);
    }
    return (
        <View style={{ paddingBottom: 40 }}>
            <TextInput
                onChangeText={value => setName(value)}
                style={styles.todoInput}
                autoCapitalize='none'
            //keyboardType='numeric' 
            />
            <Button title='Add new' onPress={() => handleAddNewTodo()} />
        </View>
    )
}

export default InputTodo;