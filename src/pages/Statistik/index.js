import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Gap, Header } from '../../components'
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from "victory-native";

const Statistik = ({navigation, route}) => {
  const uri = route.params.uri;

  const [lakiLaki, setLakiLaki] = useState(0);
  const [perempuan, setPerempuan] = useState(0);

  useEffect(() => {
    (async() => {
      const req = await fetch(`${uri}getJadwal`);
      const res = await req.json();
      
      if(res.status === 'success') {
        // kalo bisa ambil data dari backend
        setLakiLaki(res.desc.lakiLaki);
        setPerempuan(res.desc.perempuan);
      }
      else {
        // kalo nd bisa ambil data dari backend
      }
    })();
  }, [lakiLaki, perempuan]);

  const data ={
    
    jenisKelamin: [
      {x: 'Laki-Laki', y: lakiLaki},
      {x: 'Perempuan', y: perempuan},

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