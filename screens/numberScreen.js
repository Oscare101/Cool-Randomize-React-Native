import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function NumberScreen({ navigation }) {
  const [minNumb, setMinNub] = useState()
  const [maxNumb, setMaxNub] = useState()

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.screen}>
        <View style={styles.upBlock}>
          <View style={styles.inputRow}>
            <View style={styles.inputCol}>
              <Text style={styles.inputText}>Minimum Number</Text>
              <TextInput
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                blurOnSubmit
                style={styles.input}
                onChangeText={(num) => setMinNub(num.replace(/[^0-9]/g, ''))}
                value={minNumb}
              />
            </View>
            <View style={styles.inputCol}>
              <Text style={styles.inputText}>Maximum Number</Text>
              <TextInput
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                blurOnSubmit
                style={styles.input}
                onChangeText={(num) => setMaxNub(num.replace(/[^0-9]/g, ''))}
                value={maxNumb}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              width: '100%',
            }}
          >
            <View style={styles.randButton}>
              <Text>Randomize</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  upBlock: {
    flexDirection: 'column',
    width: '100%',
  },
  inputRow: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  inputCol: {
    flexDirection: 'column',
  },
  inputText: {
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 5,
    textAlign: 'center',
    fontSize: 28,
    width: 170,
    backgroundColor: '#ccc',
  },
  randButton: {
    backgroundColor: '#ccc',
    width: '90%',
    alignSelf: 'center',
    margin: 10,
    alignItems: 'center',
    padding: 10,
  },
})
