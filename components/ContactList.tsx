import { ScrollView, StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

const {width:screenWidth}=Dimensions.get("window")

export default function ContactList() {

    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const contacts=[
        {
            id:1,
            name:"Prasad",
            Work:"Web developer",
            image:"https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id:2,
            name:"Priya",
            Work:"Ui Designer",
            image:"https://images.pexels.com/photos/19414561/pexels-photo-19414561/free-photo-of-beautiful-brunette-woman-in-black-jacket.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        },
        {
            id:3,
            name:"Prasad",
            Work:"Web developer",
            image:"https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id:4,
            name:"Prasad",
            Work:"Web developer",
            image:"https://images.pexels.com/photos/906531/pexels-photo-906531.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id:5,
            name:"Prasad",
            Work:"Web developer",
            image:"https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    ]
  return (
    <View >

       <View style={styles.headingContainer}>
        <Text style={styles.heading}>Contact List</Text>
       </View>
       <View style={styles.contactCardContainer}>
       <LinearGradient colors={["#d0cccc","pink"]} style={{padding:0,borderRadius:20}}>
        <View style={styles.containerCardText}>
        <Text style={styles.heading}>Meet my team</Text>
        </View>
       <ScrollView scrollEnabled={true} horizontal={true}>
        <View style={styles.contactCards}>
        {contacts.map((item)=>(
            <View key={item.id} style={styles.india}>
            <Image source={{
                uri:item.image
            }}
            style={styles.imageurl}
            />
            <Text style={styles.heading}>{item.name}</Text>
            <Text style={styles.userwork}>{item.Work}</Text>
            </View>
        ))}
        </View>
       </ScrollView>
       </LinearGradient>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    india:{
        backgroundColor:"#959595",
        borderRadius:20,
        padding:20
    },
    
    contactCards:{
        flex:1,
        flexDirection:"row",
        marginVertical:40,
        gap:4,
    },
    username:{
        fontWeight:"bold",
        color:"yellow",
        fontSize:16,
    },
    userwork:{
        color:"white"
    },
    containerCardText:{
        flex:1,
        alignItems:"center"
    },
    contactCardContainer:{
        flex:1,
        padding:10,
        backgroundColor:"gray",
        borderRadius:20,
        margin:10
    },
    ContactCard:{
        backgroundColor:"gray",
        padding:20,
        borderRadius:20,
       
    },
    headingContainer:{
        flex:1,
        alignItems:"center",

    },
    heading:{
        color:"yellow",
        fontSize:20,
        fontWeight:"bold"
    },
    imageurl:{
        height:100,
        width:100,
        borderRadius:100/2
    }
})