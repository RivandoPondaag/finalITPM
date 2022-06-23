import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../../components'
import Icon from 'react-native-vector-icons/Ionicons';

const Jadwal = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title='Pesan Tempat' onBack={()=>navigation.goBack()}/>
      
      
      <View style={{marginBottom: 10,marginHorizontal:5}}>
      <TextInput title='Jumlah' placeholder="Masukan jumlah tempat duduk"/>
      </View>
      <View style={{marginLeft:10,}}>
        <Text style={{color:'black',fontWeight:'bold'}}>100/100</Text>
      </View>
      <View style={{backgroundColor:'white',borderRadius:15,elevation:10, marginHorizontal:5,}}>
      <View style={styles.pagi}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#83078EB0',margin:20,}}>Sesi Pagi </Text>
        
        <View style={styles.jamWrapper}>
        <View style={styles.wrapper}>
        <Icon name="alarm-sharp" size={20} color="#83078EB0" />
        <Text style={{color:'black'}}>5.30 - 7.00 </Text>
        </View>
        </View>

      </View>
     
      </View>
      <View style={{marginRight:15, marginLeft:250, marginTop:5}}>   
      <Button title="Pesan tempat"/>
      </View>
   
      <Gap height={20}/>
      <View style={{marginLeft:10,}}>
        <Text style={{color:'black',fontWeight:'bold'}}>100/100</Text>
      </View>
      <View style={{backgroundColor:'white',borderRadius:15,elevation:10, marginHorizontal:5,}}>
      <View style={styles.pagi}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#83078EB0',margin:20,}}>Sesi Siang </Text>
        
        <View style={styles.jamWrapper}>
        <View style={styles.wrapper}>
        <Icon name="alarm-sharp" size={20} color="#83078EB0" />
        <Text style={{color:'black'}}>10.00 - 11.30 </Text>
        </View>
        </View>

      </View>
     
      </View>
      <View style={{marginRight:15, marginLeft:250, marginTop:5}}>   
      <Button title="Pesan tempat"/>
      </View>
      <Gap height={20}/>
      <View style={{marginLeft:10,}}>
        <Text style={{color:'black',fontWeight:'bold'}}>100/100</Text>
      </View>
      <View style={{backgroundColor:'white',borderRadius:15,elevation:10, marginHorizontal:5,}}>
      <View style={styles.pagi}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#83078EB0',margin:20,}}>Sesi malam </Text>
        
        <View style={styles.jamWrapper}>
        <View style={styles.wrapper}>
        <Icon name="alarm-sharp" size={20} color="#83078EB0" />
        <Text style={{color:'black'}}>17.00 - 18.30 </Text>
        </View>
        </View>

      </View>
      
      </View>
      <View style={{marginRight:15, marginLeft:250, marginTop:5}}>   
      <Button title="Pesan tempat"/>
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
    backgroundColor:'white',
  },
  wrapper:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    
  },
 
  

})