import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { Logo } from '../../assets'

const SplashScreen = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('SignIn');
        },3000);
    },[]);
  return (
    <View style={styles.page}>
       <Logo/> 
      <Text style={styles.text}>GMIM TABITA</Text>
    </View>
  );
};

export default SplashScreen

const styles = StyleSheet.create({


    page: {
        flex: 1,
        backgroundColor: '#83078EB0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {

        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        

    }

})