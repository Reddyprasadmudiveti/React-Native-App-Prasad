import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function FansiCards() {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Trending Places</Text>
      </View>
      <ScrollView>

      <View style={styles.trendingScontainer}>
      <View style={[styles.card, styles.cardOuter, styles.elevated]}>
        <Image
          source={{
          uri:"https://img.jagranjosh.com/images/2022/March/2832022/SS-Rajamouli-Biography-RRR-director.webp"
          }}
          style={styles.cardImage}
        />
        <View>
          <Text style={styles.headingText}>S.S Rajamouli</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse
            animi voluptatibus voluptates! Sequi a sed, itaque, eligendi eos
            adipisci perferendis dolores modi incidunt iste excepturi ducimus,
            nemo dolore odio.
          </Text>
          <View style={styles.label}>
            <Text style={styles.rating}>5 Star</Text>
            <Text style={styles.labelColor}>Trending</Text>
          </View>
        </View>
      </View>
      <View style={[styles.card, styles.cardOuter, styles.elevated]}>
        <Image
          source={{
            uri:"https://wallpapers.com/images/hd/nani-on-pink-wooden-wall-0zy3fjm1wpmkbx7t.jpg"
          }}
          style={styles.cardImage}
        />
        <View>
          <Text style={styles.headingText}>Natural star NANI</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse
            animi voluptatibus voluptates! Sequi a sed, itaque, eligendi eos
            adipisci perferendis dolores modi incidunt iste excepturi ducimus,
            nemo dolore odio.
          </Text>
          <View style={styles.label}>
            <Text style={styles.rating}>4 Star</Text>
            <Text style={styles.labelColor}>Trending</Text>
          </View>
        </View>
      </View>
      <View style={[styles.card, styles.cardOuter, styles.elevated]}>
        <Image
          source={{
            uri: 'https://wallpapers.com/images/hd/jr-ntr-cute-smirk-gwgoammdche4axmz.jpg',
          }}
          style={styles.cardImage}
        />
        <View>
          <Text style={styles.headingText}>Nandamuri taraka ramarao (NTR)</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse
            animi voluptatibus voluptates! Sequi a sed, itaque, eligendi eos
            adipisci perferendis dolores modi incidunt iste excepturi ducimus,
            nemo dolore odio.
          </Text>
          <View style={styles.label}>
            <Text style={styles.rating}>5 Star</Text>
            <Text style={styles.labelColor}>Trending</Text>
          </View>
        </View>
      </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    trendingScontainer:{
        flex:1,
    },
    elevated:{
        backgroundColor:"gray",
        borderRadius:20,
        padding:10
    },
    cardOuter:{
        margin:10,
    },
    headingText:{
        flex:1,
        fontSize:20,
        fontWeight:"bold",
        color:"yellow"
    },
    headingContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        margin:20
      },
      card:{
      },
      cardImage:{
        height:200,
        borderRadius:20
      },
      paragraph:{
        color:"white",
        fontSize:10

      },
      labelColor:{
        color:"yellow",
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:"red",
        borderRadius:40,
        alignItems:"center",
        justifyContent:"center"
      },
      rating:{
        color:"white",
        paddingHorizontal:10,
        borderColor:"yellow",
        backgroundColor:"red",
        borderRadius:20

      },
      label:{
        flex:1,
        flexDirection:"row",
        marginTop:20,
        justifyContent:"space-between",
        alignItems:"center"
      }
})