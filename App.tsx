import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import FansiCards from './components/FansiCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
import LinearGradient from 'react-native-linear-gradient'

const App = () => {
  return (
    <SafeAreaView>
      <LinearGradient colors={["blue","pink","yellow"]} style={{height:"100%"}}>

      
      <ScrollView>
      <Text>Hello</Text>
      <FlatCards/>
      <FansiCards/>
      <ContactList  />
      <ActionCard/>
      </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default App