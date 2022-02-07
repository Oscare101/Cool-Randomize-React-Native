import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import NumberScreen from './screens/numberScreen'
import DiceScreen from './screens/diceScreen'
import PasswordScreen from './screens/passwordScreen'
import MainScreen from './screens/mainScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main Screen" component={MainScreen} />
        <Stack.Screen name="Random Number Screen" component={NumberScreen} />
        <Stack.Screen name="Dice Screen" component={DiceScreen} />
        <Stack.Screen name="Password Screen" component={PasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
