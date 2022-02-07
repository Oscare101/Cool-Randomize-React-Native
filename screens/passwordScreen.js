import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function PasswordScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>Password</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
