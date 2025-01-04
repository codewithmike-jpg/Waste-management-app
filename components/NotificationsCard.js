import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const NotificationsCard = () => {
  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={'black'}>
        <Text>Points sucessfully redeemed</Text>
        <Text>09:20 AM</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NotificationsCard

const styles = StyleSheet.create({
    card:{
        borderColor:'green',
        backgroundColor:'red'
        
    }
})