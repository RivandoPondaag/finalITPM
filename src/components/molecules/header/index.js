import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Back } from '../../../assets/icon'
import { Gap } from '../../atom'

const Header = ({title,color='#83078EB0',textColor='white', onBack}) => {
  return (
    <View style={styles.container(color)}>
        {
            onBack &&(
                <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
                <View style={styles.back}>
                <Back/>
                </View>
                </TouchableOpacity>
            )
        }
        <Gap width={26}/>
      <Text style={styles.text(textColor)}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

    container : color => ({
        paddingLeft: 24,
        paddingVertical: 38,
        backgroundColor: color,
        flexDirection: 'row',
        alignItems: 'center',
        
        
    }),
    text: (textColor)=>({
        fontFamily: 'Poppins-Medium',
        fontSize: 25,
        color: textColor,
        fontWeight:'bold',
    }),
    back:{
      
        padding: 10,

    },



})