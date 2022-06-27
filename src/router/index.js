
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActions } from '@react-navigation/native';
import { EditOprator, editOprator, Guest, Jadwal, Kapasitas, Menu, Oprator, SignIn, SignUP, SplashScreen, Statistik, Tentang } from '../pages';


const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignIn" component={SignIn}options={{headerShown: false}}/>
        <Stack.Screen name="SignUP" component={SignUP}options={{headerShown: false}}/>
        <Stack.Screen name="Menu" component={Menu}options={{headerShown: false}}/>
        <Stack.Screen name="Statistik" component={Statistik}options={{headerShown: false}}/>
        <Stack.Screen name="Tentang" component={Tentang}options={{headerShown: false}}/>
        <Stack.Screen name="Kapasitas" component={Kapasitas}options={{headerShown: false}}/>
        <Stack.Screen name="Jadwal" component={Jadwal}options={{headerShown: false}}/>
        <Stack.Screen name="Guest" component={Guest}options={{headerShown: false}}/>
        <Stack.Screen name="Oprator" component={Oprator}options={{headerShown: false}}/>
        <Stack.Screen name="EditOprator" component={EditOprator}options={{headerShown: false}}/>








    </Stack.Navigator>
  )
}

export default Router

