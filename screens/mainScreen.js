import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomButton from '../components/customButton'

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <CustomButton
        title="Random Number Screen"
        color={'#ffa263'}
        onClick={() => navigation.navigate('Random Number Screen')}
      />
      <CustomButton
        title="Dice Screen"
        color={'#71ff61'}
        onClick={() => navigation.navigate('Dice Screen')}
      />
      <CustomButton
        title="Password Screen"
        color={'#61bdff'}
        onClick={() => navigation.navigate('Password Screen')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})
