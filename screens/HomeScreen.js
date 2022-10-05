import React from 'react'
import { View, Text, Pressable } from 'react-native'


const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Account')}>
        <Text>Press</Text>
      </Pressable>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen