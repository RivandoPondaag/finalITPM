import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gap, Header } from '../../components'
import Icon from 'react-native-vector-icons/Ionicons';

const Jadwal = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title='Jadwal' onBack={()=>navigation.goBack()}/>
      <Gap height={30}/>
      
      <View style={{backgroundColor:'white',borderRadius:15,elevation:5, marginHorizontal:5,}}>
      <View style={styles.pagi}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#83078EB0',marginTop:10,}}>Sesi Pagi </Text>
        
        <View style={styles.jamWrapper}>
        <View style={styles.wrapper}>
        <Icon name="alarm-sharp" size={20} color="#83078EB0" />
        <Text style={{color:'black'}}>5.30 - 7.00 </Text>
        </View>
        </View>

      </View>
      <Text style={{marginTop:15,marginBottom:5, marginLeft:10}}>Kolom 1, Kolom 3, Kolom 5, Kolom 7</Text>
      </View>
      <Gap height={20}/>
      <View style={{backgroundColor:'white',borderRadius:15,elevation:5, marginHorizontal:5,}}>
      <View style={styles.pagi}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#83078EB0',marginTop:10,}}>Sesi Siang </Text>
        
        <View style={styles.jamWrapper}>
        <View style={styles.wrapper}>
        <Icon name="alarm-sharp" size={20} color="#83078EB0" />
        <Text style={{color:'black'}}>10.00 - 11.30 </Text>
        </View>
        </View>

      </View>
      <Text style={{marginTop:15,marginBottom:5, marginLeft:10}}>Kolom 8, Kolom 9, Kolom 11, Kolom 12</Text>
      </View>

      <Gap height={20}/>
      <View style={{backgroundColor:'white',borderRadius:15,elevation:5, marginHorizontal:5,}}>
      <View style={styles.pagi}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#83078EB0',marginTop:10,}}>Sesi malam </Text>
        
        <View style={styles.jamWrapper}>
        <View style={styles.wrapper}>
        <Icon name="alarm-sharp" size={20} color="#83078EB0" />
        <Text style={{color:'black'}}>17.00 - 18.30 </Text>
        </View>
        </View>

      </View>
      <Text style={{marginTop:15,marginBottom:5, marginLeft:10}}>Kolom 2, Kolom 4, Kolom 6, Kolom 10</Text>
      </View>

    </View>
  )
}

export default Jadwal

const styles = StyleSheet.create({

  pagi:{
    backgroundColor:'white',
    flexDirection:'row',
    marginHorizontal:10,
  },
  siang:{
    backgroundColor:'white',
    flexDirection:'row',
    
  },
  malam:{
    backgroundColor:'white',
    flexDirection:'row',

  },
  txtSiang:{
    
  },
  jamWrapper:{
    alignItems:'flex-end',
    flex:1,
    
    
  },
  page:{
    flex:1,
  },
  wrapper:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    
  },
 
  

})