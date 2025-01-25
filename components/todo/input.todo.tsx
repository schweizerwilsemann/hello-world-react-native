import React, { useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
import MyButton from '../button/my.button';

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
        if (!name) {
            Alert.alert(
                "invalid information",
                "Title can not be empty",
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: "Ok",
                        onPress: () => console.log('Ok Pressed'),

                    }
                ]
            );
            return;
        }
        addTodo(name);
        setName("");
    }
    return (
        <>
            <View style={{ marginBottom: 20 }}>
                <TextInput
                    value={name}
                    onChangeText={value => setName(value)}
                    style={styles.todoInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                //keyboardType='numeric' 
                />
                <MyButton title='add new' onPress={handleAddNewTodo} />
            </View>

        </>
    )
}

export default InputTodo;