import { StyleSheet, Text, View ,Linking,TouchableOpacity, Image} from 'react-native'
import React from 'react'

export default function ActionCard() {
   function openWebsite(websiteLink:string){
    Linking.openURL(websiteLink)
   }
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Tourist Places</Text>
      </View>
      <View style={styles.card}>
        <Image 
        source={{uri:"https://media-cdn.tripadvisor.com/media/photo-s/01/61/e4/38/nice-ooti.jpg"}}
        style={styles.cardImage}
        ></Image>
        <Text style={styles.headingText}>Ooty</Text>
        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus porro consequuntur placeat, tenetur cupiditate enim! Quasi asperiores repellat repellendus expedita inventore delectus enim unde deserunt! Quis, ipsam? Nobis, omnis beatae.</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={()=>openWebsite("https://www.holidify.com/places/ooty/")} >
        <Text style={styles.button}>Read More</Text>
        </TouchableOpacity>
        <Text style={styles.button}>Rating</Text>
      </View>
      </View>
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
        color:"yellow",
    },
    card:{
      margin:20,
      padding:10,
      backgroundColor:"gray",
      borderRadius:20
    },
    elevatedCard:{},
    cardImage:{
      height:200,
      borderRadius:20
    },
    paragraph:{
      color:"white",
      fontSize:10
    },
    buttons:{
      flex:1,
      justifyContent:"space-between",
      flexDirection:"row"

    },
    button:{
      marginTop:20,
      paddingVertical:6,
      paddingHorizontal:10,
      backgroundColor:"red",
      borderRadius:20
    }
})