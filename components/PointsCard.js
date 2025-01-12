import React from "react";
import { View, Text, StyleSheet,Image ,TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
const jn= require('../assets/jn.png');
const jnybu1= require('../assets/jnybu1.png');
const eye= require('../assets/eyes.png');
const redeem= require('../assets/redeem.png');
const histicon= require('../assets/histicon.png');



export default function PointsCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <Image source={jn} style={styles.jn} />
            <View style={styles.eyes}>
            <Text style={styles.pointsLabel}>Your Points</Text>
                <View style={styles.point}>
                    <Text style={styles.pointsValue}>75,000</Text>
                    <Image source={eye} style={styles.ieye} />
                </View>
            </View>
        <Image source={jnybu1} style={styles.jnybu} />
      </View>
      {/* User ID */}
      <Text style={styles.userId}>Faj******</Text>

      {/* Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.redeemButton}>
        <Image source={redeem} style={styles.redeem} />
          <Text style={styles.redeemText}>Redeem points</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.historyButton}>
        <Image source={histicon} style={styles.history} />
          <Text style={styles.historyText}>History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2d2d2d",
    // padding: 20,
    borderRadius: 15,
    width:343,
    height:189,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eyes:{
    marginTop:20
  },
  point:{
    flexDirection:'row',
    marginRight:50,

  },
  pointsLabel:{
    color:'#87888D',
    fontSize:11,
  },
  pointsValue:{
    color:'#BEBEC1',
    fontSize:18,
    fontWeight:600
  },
  userId:{
    color:'#A0A0A5',
    fontSize:12,
    marginBottom:20
  },
  jn:{width:48,height:48},
  jnybu:{width:152,height:117,top:1,left:20},
  ieye:{width:16,height:16,marginLeft:5,marginTop:5},
  actions:{flexDirection:'row', justifyContent:'space-between'},
  redeemButton:{
    flexDirection:'row',
    backgroundColor:'#25D076',
    width:145,
    height:40,
    padding:10,
    borderRadius:18,
    border:1,
  },
  redeemText:{
    color:'#A3E8C7',
  },
  historyButton:{
    flexDirection:'row',
    backgroundColor:'transparent',
    width:145,
    height:40,
    padding:10,
    borderRadius:18,
    borderColor:'#ffff',
    borderWidth:1,
  },
  historyText:{
    color:'#AEAEB1',
    fontSize:13,
    paddingLeft:10
  },
  history:{
    width:16,
    height:16,
    marginLeft:10
  },
  redeem:{
    width:16,
    height:16,
    marginRight:15,
  }
});