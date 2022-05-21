import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
  TextInput,
  AsyncStorage,
  Button,
} from 'react-native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import RNPickerSelect from 'react-native-picker-select'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function DiceScreen() {
  const [diceOutput, setDiceOutput] = useState(null)
  const [selectedCount, setSelectedCount] = useState('6')

  const Dice1 = () => {
    return (
      <View style={[styles.dice, { backgroundColor: '#E8F8FF' }]}>
        <FontAwesome name="circle" size={14} color="black" />
      </View>
    )
  }

  const Dice2 = () => {
    return (
      <View style={[styles.dice, { backgroundColor: '#EFE8FF' }]}>
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', top: '20%', left: '20%' }}
        />
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', bottom: '20%', right: '20%' }}
        />
      </View>
    )
  }

  const Dice3 = () => {
    return (
      <View style={[styles.dice, { backgroundColor: '#FEE8FF' }]}>
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', top: '15%', left: '15%' }}
        />
        <FontAwesome name="circle" size={14} color="black" />
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', bottom: '15%', right: '15%' }}
        />
      </View>
    )
  }

  const Dice4 = () => {
    return (
      <View style={[styles.dice, { backgroundColor: '#FFE8E8' }]}>
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', top: '15%', left: '15%' }}
        />
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', top: '15%', right: '15%' }}
        />
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', bottom: '15%', left: '15%' }}
        />
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', bottom: '15%', right: '15%' }}
        />
      </View>
    )
  }

  const Dice5 = () => {
    return (
      <View style={[styles.dice, { backgroundColor: '#EEFFE8' }]}>
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', top: '12%', left: '12%' }}
        />
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', top: '12%', right: '12%' }}
        />
        <FontAwesome name="circle" size={14} color="black" />
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', bottom: '12%', left: '12%' }}
        />
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', bottom: '12%', right: '12%' }}
        />
      </View>
    )
  }

  const Dice6 = () => {
    return (
      <View style={[styles.dice, { backgroundColor: '#FFFFE8' }]}>
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', top: '10%', left: '10%' }}
        />
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', top: '10%', right: '10%' }}
        />
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', bottom: '10%', left: '10%' }}
        />
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', bottom: '10%', right: '10%' }}
        />
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', left: '10%' }}
        />
        <FontAwesome
          name="circle"
          size={14}
          color="black"
          style={{ position: 'absolute', right: '10%' }}
        />
      </View>
    )
  }

  const DiceRandomizer = (props) => {
    switch (props.number) {
      case 0:
        return <Dice1 />
      case 1:
        return <Dice2 />
      case 2:
        return <Dice3 />
      case 3:
        return <Dice4 />
      case 4:
        return <Dice5 />
      case 5:
        return <Dice6 />
      default:
        return <Dice5 />
    }
  }

  const Randomaizer = () => {
    let randomNumber = Math.floor(Math.random() * Math.floor(6))
    return <DiceRandomizer number={randomNumber} />
  }

  const Output = (count) => {
    switch (count) {
      case '1':
        return (
          <View style={styles.random}>
            <Randomaizer />
          </View>
        )

      case '2':
        return (
          <View style={styles.random}>
            <Randomaizer />
            <Randomaizer />
          </View>
        )

      case '3':
        return (
          <View style={styles.random}>
            <Randomaizer />
            <Randomaizer />
            <Randomaizer />
          </View>
        )

      case '4':
        return (
          <View style={styles.random}>
            <Randomaizer />
            <Randomaizer />
            <Randomaizer />
            <Randomaizer />
          </View>
        )

      case '5':
        return (
          <View style={styles.random}>
            <Randomaizer />
            <Randomaizer />
            <Randomaizer />
            <Randomaizer />
            <Randomaizer />
          </View>
        )

      case '6':
        return (
          <View style={styles.random}>
            <Randomaizer />
            <Randomaizer />
            <Randomaizer />
            <Randomaizer />
            <Randomaizer />
            <Randomaizer />
          </View>
        )
    }
  }
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor="#bbb" />

      <View
        style={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-between',
          width: width,
          paddingHorizontal: 10,
          marginVertical: 50,
        }}
      >
        <View style={styles.pickerView}>
          <RNPickerSelect
            style={styles.picker}
            placeholder={{
              label: '1',
              value: '1',
            }}
            onValueChange={(value) => {
              setSelectedCount(value)
            }}
            items={[
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' },
              { label: '5', value: '5' },
              { label: '6', value: '6' },
            ]}
          />
        </View>
        <View>
          <Text style={styles.countText}>{selectedCount}</Text>
        </View>
        <TouchableOpacity
          onPress={() => setDiceOutput(Output(selectedCount))}
          activeOpacity={1}
        >
          <View style={styles.button}>
            <FontAwesome5 name="dice" size={45} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.top}>{diceOutput}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 10,
    width: width / 7,
    height: width / 7,
    elevation: 5,
    margin: 4,
  },
  random: {
    flexDirection: 'row',
    width: width,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: width - 150,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#AEB6FF',
    elevation: 10,
  },
  top: {
    marginBottom: 10,
    backgroundColor: '#fff',
    height: width / 5,
    flexDirection: 'column',
  },

  countText: {
    fontSize: 35,
    textShadowColor: '#AEB6FF',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },
  pickerView: {
    width: 55,
    backgroundColor: '#AEB6FF',
    borderRadius: 100,
    elevation: 10,
  },
})
