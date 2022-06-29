import { ScrollView, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { Gap, Header } from '../../components'
import { Greja } from '../../assets'

const TentangKami = ({navigation}) => {
  return (
    <View style={styles.page}>
    <Header title='Tentang Kami' onBack={()=>navigation.goBack()}/>
    <ScrollView>
    <Text style={styles.txt}>{"\n"}GMIM Tabita Sarongsong 1 {"\n"}</Text>
    <Gap height={5}/>
    <View style={styles.grejaWrapper}>
    <Greja/>
    <View style={styles.textWrapper}>
    <Text style={styles.txt}>
     Sarongsong I, Kec. Airmadidi,
    </Text>
    <Text style={styles.txt}>
     Kabupaten Minahasa Utara,
    </Text>
    <Text style={styles.txt}>
     Sulawesi Utara
    </Text>
    <Text style={styles.txt2}> Gereja Masehi Injili di 
    </Text>
    <Text style={styles.txt3}> Minahasa adalah salah satu 
    </Text>
    <Text style={styles.txt3}> gereja Reformed Protestant 
    </Text>
    <Text style={styles.txt3}> di Indonesia yang didirikan 
    </Text>
    <Text style={styles.txt3}> pada 30 September 1934.
    </Text>
    
    </View>
    
    </View>
    <Gap height={10}/>
    <Text style={styles.txt3}>
    {"\n"}     Kekristenan secara sistematis diperkenalkan di Minahasa oleh Johann Friedrich
    Riedel dan Johann Gottlieb Schwars, yang sebelum datang ke Indonesia dididik di
    Belanda dan dikirim oleh the Nederland Zendeling Genootschap, badan Misi
    Belanda. 
    <Text>
    {"\n"}      SEJARAH JEMAAT GMIM TABITA SARONGSONG 1 WILAYAH AIRMADIDI II 
        Jemaat Tabita dengan jumlah 6 kolom 180 KK menjadi jemaat yang
        mandiri pada tanggal 24 September 1989, sebagai hasil
        pemekaran Jemaat Sentrum Airmadidi. Dan langsung menunjuk
        Koordinator Pelayanan: Pnt. Dr. J. M. L. Umboh, MS , Koordinator
        Administrasi : Pnt. Drs. J. B. Andaria, Koordinator keuangan: Pnt. W. J.
        Montung. Tempat Ibadah yang digunakan waktu itu, adalah gedung
        gilingan milik Pnt. W. J. Montung. Tempat ibadah ini disebut KASINAH.
        CAPAIAN SETIAP PERIODE PELAYANAN 9 TAHUN 1990 S/D 2009=PERIODE
        Tanggal 24 September 1989 Jemaat TABITA mekar dari Jemaat Centrum Airmadidi.
        Tanggal 11 November 1990 : Kanisah resmi menjadi Gereja HIBAH ENCI 
        STIN Montung.{"\n"}{"\n"}Coordinat : 1.4252629881859284, 124.97837691719296 .{"\n"}{"\n"}
        

    </Text>
    </Text>
    </ScrollView>
    </View>
  )
}

export default TentangKami

const styles = StyleSheet.create({

    grejaWrapper:{
        flexDirection:'row',
    },
    textWrapper:{
        flexDirection:'column',
        paddingHorizontal:5,
    },
    page:{
        backgroundColor:'white',
        flex: 1,
    },
    txt:{
        color:'black',
        fontWeight:'bold',
    },
    txt2:{
        marginTop:20,
        color:'black',
        
    },
    txt3:{

        color:'black',
        
        
    }
})