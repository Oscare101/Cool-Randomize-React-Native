import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps'

export default function CustomButton(props) {
  return (
    <TouchableOpacity onPress={props.onClick} style={{ width: '100%' }}>
      <View style={[styles.button, { backgroundColor: props.color }]}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 10,
    padding: 40,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 22,
  },
})
