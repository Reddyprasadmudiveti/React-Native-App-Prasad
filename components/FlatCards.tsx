import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <View style={styles.headingContainer}>
      <Text style={styles.headingText}>FlatCards</Text>
      </View>
    <ScrollView horizontal={true}>
    <View style={styles.container}>
    <View style={[styles.card,styles.cardone]}>
      <Text>Red</Text>
      </View>
    <View style={[styles.card,styles.cardtwo]}>
      <Text>Green</Text>
      </View>
    <View style={[styles.card,styles.cardthree]}>
      <Text>Yellow</Text>
      </View>
    <View style={[styles.card,styles.cardfour]}>
      <Text>Yellow</Text>
      </View>
    </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  },
    headingText:{
        flex:1,
        fontSize:20,
        fontWeight:"bold",
    },
    container:{
      flex:1,
      flexDirection:"row",
      alignItems:"center",
      gap:10,
      marginTop:50,
      padding:10
    },
    card:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      height:100,
      width:100,
      borderRadius:10,
    },
    cardone:{
      backgroundColor:"red",
      elevation:4,
      shadowColor:"pink",
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:20
    },
    cardtwo:{
      backgroundColor:"green"
    },
    cardthree:{
      backgroundColor:"yellow"
    },
    cardfour:{
      backgroundColor:"pink"
    }



})