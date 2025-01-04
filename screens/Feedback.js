import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView, TextInput } from 'react-native-web'

const Feedback = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.header}>
        
      </View>
      <Text style={styles.give}>Give us your feedback</Text>
      <Text style={styles.tell}>Tell us how you feel about the app</Text>
      <View style={styles.send}>
        <Text style={styles.mess}>Message</Text>
        <TouchableOpacity>
            <TextInput 
            style={styles.input}
            placeholder="Type here..."
            />
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <Text style={styles.text}>Send</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Feedback

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding: 16,
      },
      input: {
        height: 212,
        width:338,
        borderColor: '#E0E1E5',
        borderWidth: 1,
        // width: '80%',
        paddingLeft: 8,
        padding: 10,
        fontSize: 16,
        textAlignVertical: 'top',
        borderRadius:22,
      },
      give:{
        fontSize:24,
        color:'#3B3C3E',
        marginTop:60,
        // marginBottom:20,
        marginLeft:20,
        fontWeight:600
      },
      tell:{
        color:'#A3A4A6',
        marginTop:20,
        marginLeft:20,
        fontWeight:600
      },
      send:{
        marginTop:30,
        marginLeft:20,
      },
      
      mess:{
        color:'#636466',
        marginBottom:20,
        fontWeight:600
      },
      button:{
        marginTop:40,
        backgroundColor:'#25D076',
        borderRadius:22,
        // left:4,
        height:48,
        width:335,
        marginLeft:40
      },
      text:{
        alignItems:'center',
        fontSize:16,
        paddingLeft:149,
        fontWeight:600,
        top:10,
        color:'#ACEBCB'
      }
})