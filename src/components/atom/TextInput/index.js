import { StyleSheet, Text, View,TextInput as TextInputRN } from 'react-native'
import React from 'react'

const TextInput = ({title,placeholder, onChangeText,...rest}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder}{...rest} onChangeText={val => onChangeText(val)}/>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({

    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Reguler',
        marginBottom: 6,
        color:'black',
        
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        paddingLeft: 10,
        paddingHorizontal: 10,

    }



})