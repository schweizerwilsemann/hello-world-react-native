
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Text</Text>

      </View>
      <Text>
        Hello world in React Native!
        <Text>I'm Khoa</Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'green',
    fontSize: 40
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
