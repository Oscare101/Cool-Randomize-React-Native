import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native'

export default function NumberScreen({ navigation }) {
  const [minNumb, setMinNumb] = useState()
  const [maxNumb, setMaxNumb] = useState()
  const [random, setRandom] = useState('')

  function StartRandom(min, max) {
    if (min && max) {
      if (min == max) {
        setRandom('Yout minimum number and maximum number must be different')
      } else if (min > max) {
        setRandom(
          'Yout minimum number must be smaller than your maximum number '
        )
      } else {
        let c = Math.floor(Math.random() * (+max - +min + 1) + +min)
        setRandom(c)
      }
    } else {
      setRandom('Input your numbers')
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.screen}>
        <View style={styles.inputRow}>
          <View style={styles.inputCol}>
            <Text style={styles.inputText}>Minimum Number</Text>
            <TextInput
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              style={styles.input}
              onChangeText={(num) => setMinNumb(num.replace(/[^0-9]/g, ''))}
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
              onChangeText={(num) => setMaxNumb(num.replace(/[^0-9]/g, ''))}
              value={maxNumb}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              width: '40%',
            }}
            onPress={() => {
              setMinNumb('')
              setMaxNumb('')
              setRandom('')
            }}
          >
            <View style={styles.randButton}>
              <Text style={styles.clearText}>Clear</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              width: '40%',
            }}
            onPress={() => {
              StartRandom(minNumb, maxNumb)
            }}
          >
            <View style={styles.randButton}>
              <Text style={styles.randText}>Randomize</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.randowBlock}>
          <Text style={styles.randomText}>{random}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    fontSize: 14,
    alignSelf: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#999',
    padding: 5,
    textAlign: 'center',
    fontSize: 28,
    width: 170,
    backgroundColor: '#fff',
  },
  randButton: {
    width: '90%',
    alignSelf: 'center',
    margin: 10,
    alignItems: 'center',
    padding: 10,
  },
  clearText: {
    color: '#FB3B35',
    fontSize: 20,
  },
  randText: {
    color: '#0377EA',
    fontSize: 20,
  },
  randowBlock: {
    marginTop: 50,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  randomText: {
    fontSize: 30,
  },
})
