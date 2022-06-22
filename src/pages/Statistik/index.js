import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Gap, Header } from '../../components'
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from "victory-native";

const Statistik = ({navigation}) => {

  const data ={
    
    jenisKelamin: [
      {x: 'Laki-Laki', y: 50},
      {x: 'Perempuan', y: 80},

    ],
    jemaat: [
      {x: 'Jemaat GMIM Tabita', y: 95},
      {x: 'Jemaat Luar', y: 20},

    ],
  };
    
  return (
    <View style={{flex: 1}}>
       <Header title='Statistik' onBack={()=>navigation.goBack()}/>
      <ScrollView>
      <View style={styles.page}>
      <VictoryChart domainPadding={{ x: 100 }} theme={VictoryTheme.material} >
        
        <VictoryBar data={data.jenisKelamin} style={{ data: { fill: "#c43a31" } }} />
        
      </VictoryChart>
      <VictoryChart domainPadding={{ x: 100 }} theme={VictoryTheme.material}>
      
        <VictoryBar data={data.jemaat} style={{ data: { fill: "blue" } }}/>
      
    
     </VictoryChart>
      </View>
      </ScrollView>

    </View>
  )
}

export default Statistik

const styles = StyleSheet.create({
  page:{

    flex:1,
    backgroundColor:'white',
  }
})