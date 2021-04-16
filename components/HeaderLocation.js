import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function HeaderLocation() {
  return (
    <>
      <View style={{ paddingTop: 15, flexDirection: "row", alignItems: 'center' }}>
          <Icon name="location-outline" color="#000" size={24} />
          <Text style={{ marginLeft: 7, fontSize: 12 }}>Home Yelahanka, Bengaluru</Text>
        </View>
    </>
  )
}
