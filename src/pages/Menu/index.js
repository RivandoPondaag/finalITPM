import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Gap, Header } from '../../components';
import { Profil, Warta } from '../../assets/icon';

const Menu = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title='Menu' color='white' textColor='black' onBack={()=>navigation.goBack()}/>

        <View style={styles.center}>
        <View style={styles.contentWrapper}>
     <View style={styles.nameWrapper}>
     
     <Text style={styles.text}>Syalom,</Text>
      <Text style={styles.text}>Rivando Pondaag</Text>
      <Gap height={25}/>
      <Text style={styles.text}>Kolom 3</Text>
     </View>
     <View style={styles.profilWrapper}>
     <Profil/>
     </View>
     </View>

     <View style={styles.fitur}>
   <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Jadwal')}>
    
   <View>
   
   <View style={styles.jadwal}>
     <Icon name="calendar-sharp" size={35} color="white" />
     </View>
   
     <View>
      <Text>   Jadwal</Text>
     </View>
   </View>
   </TouchableOpacity>
   <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Kapasitas')}>
    
     <View>
     <View style={styles.kapasitas}>
     <Icon name="business-sharp" size={35} color="white" />
      
     </View>
     <View>
      <Text>  Kapasitas</Text>
     </View>
     </View>
     </TouchableOpacity>
     <View>
     <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Statistik')}>
     <View style={styles.statistik}>
     <Icon name="stats-chart-sharp" size={35} color="white" />
    
     </View>
     </TouchableOpacity>
     <View>
      <Text>   Statistik</Text>
     </View>
     </View>
     <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Tentang')}>
     <View>
     <View style={styles.tentang}>
     <Icon name="information-sharp" size={35} color="white" />
      
     </View>
     <View>
      <Text>Tentang Kami</Text>
     </View>
     </View>
     </TouchableOpacity>
     </View>
     <Gap height={15}/>
      <Warta/>
        </View>

    </View>
  )
}

export default Menu

const styles = StyleSheet.create({

  page:{
    flex: 1,
    backgroundColor:'white',
  },
  contentWrapper:{
    backgroundColor:'#83078EB0',
    borderRadius: 20,
    width: 390,
    height:145,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection:'row',
    
  },
  nameWrapper:{
    alignItems:'flex-start',
    
    
  },
  text:{
    color:'white',
    fontSize: 16,
    paddingLeft: 10,
    fontWeight:'bold',
  },
  profilWrapper:{
    justifyContent:'center',
    alignItems:'flex-end',
    flex:1,
    paddingRight:20,
  },
  fitur:{
    flexDirection:'row',
    marginHorizontal:10,
    justifyContent:'center',
  },
  jadwal:{
    marginRight:20,
    backgroundColor:'#1867C2',
    height:70,
    width:70,
    borderRadius:70,
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    elevation:10,


  },
  statistik:{
    marginRight:20,
    backgroundColor:'#126F03',
    height:70,
    width:70,
    borderRadius:70,
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    elevation:5,

  },
  kapasitas:{
    marginRight:20,
    backgroundColor:'#1F6A6A',
    height:70,
    width:70,
    borderRadius:70,
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    elevation:10,

  },
  tentang:{
    marginRight:20,
    backgroundColor:'#D78408',
    height:70,
    width:70,
    borderRadius:70,
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    elevation:10,
  },
  center:{
    alignItems:'center',
  }
 
  

})