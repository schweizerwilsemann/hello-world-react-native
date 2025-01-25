import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: 'red'
    }
})
const FlexBox = () => {
    return (
        <View style={styles.container}>
            <Text>
                FlexBox
            </Text>
        </View>
    )
}

export default FlexBox