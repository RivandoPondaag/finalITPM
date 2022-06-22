import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { VictoryPie } from "victory-native";

const Kapasitas = ({navigation}) => {
  return (
    <View style={{flex:1,}}>
      <Header title='Kapasitas' onBack={()=>navigation.goBack()}/>

      <TouchableOpacity>

      <View >
      <VictoryPie
          data={[
            { x: "50%", y: 50 },
            { x: "50%", y: 50 },           
          ]}
          colorScale={["#087A28", "orange" ]}
          height={400}
          padding={50}
          
      />
      </View>

      <View>
      <VictoryPie
          data={[
            { x: "70%", y: 70 },
            { x: "30%", y: 30 },           
          ]}
          colorScale={["gray", "brown" ]}
          height={400}
          padding={50}
          
      />
      </View>
      </TouchableOpacity>

    </View>
  )
}

export default Kapasitas

const styles = StyleSheet.create({})