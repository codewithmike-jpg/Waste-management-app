import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, ScrollView, Image } from 'react-native';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import PointsCard from '../components/PointsCard';
// import { Icon } from 'react-native-vector-icons/Icon';
const bell= require('../assets/bell.png');
const waste= require('../assets/waste.png');
const trash1= require('../assets/trash1.png');
const trash2= require('../assets/trash2.png');



export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.userName}>Jane Funmi</Text>
        </View>
        <Image source={bell} style={styles.bell} />
      </View>

      {/* Points Card */}
      <View style={styles.pointsCard}>
        <PointsCard/>
      </View>
      {/* Service Menu */}
      <View style={styles.serviceMenu}>
        <TouchableOpacity style={styles.serviceItem}>
        <Image source={waste} style={styles.bell} />
          <View style={styles.deposit}>
            <Text style={styles.serviceText}>Waste Deposit</Text>
            <Text style={styles.earn}>Earn your points</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* News Section */}
      <View style={styles.newsSection}>
        <View style={styles.news}>
          <Text style={styles.sectionTitle}>News</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.newsItems}>
          <View style={styles.newsItem}>
            <Image
              style={styles.newsImage}
              source={trash1}
            />
            <View>
              <Text style={styles.newsTitle}>EcoBank Green Campaign</Text>
              <Text style={styles.newspara}>In commemoration of Earth Day, EcoBank
              launched a green campaign by planting...</Text>
              <Text style={styles.newsDate}>20 June 2024</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsItems}>
          <View style={styles.newsItem}>
            <Image
              style={styles.newsImage}
              source={trash2}
            />
            <View>
              <Text style={styles.newsTitle}>Plastic Recycling Innovation...</Text>
              <Text style={styles.newspara}>EcoBank introduced a new technology to
              recyclewaste into building mate...</Text>
              <Text style={styles.newsDate}>20 June 2024</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  greeting: { fontSize: 13, color: '#94DCB9' },
  userName: { fontSize: 15, fontWeight: 'bold',color: '#A1E1C2' },
  pointsCard: {
    backgroundColor: '#2d2d2d',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  pointsText: { color: '#fff' },
  pointsValue: { fontSize: 30, color: '#fff', fontWeight: 'bold' },
  cardActions: { flexDirection: 'row', marginTop: 10 },
  redeemButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  historyButton: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  historyText: { color: '#fff' },
  serviceMenu: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    width:400
  },
  earn:{
    color:'#A6A8AC'
  },
  serviceText: { marginLeft: 20 ,fontSize:15,color:'#4B4C4E'},
  earn:{marginLeft:20 ,marginTop:10,fontSize:11,color:"#A6A8AC"},
  newsSection: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  seeAll: { color: 'green' },
  newsItems: { marginTop: 25 },
  newsItem: { flexDirection: 'row', marginBottom: 10 },
  newsImage: { width: 80, height: 80, marginRight: 10, borderRadius: 10 },
  newsTitle: { fontWeight: 'bold', marginTop:10 ,color:'#4B4C4C'},
  newsDate: { color: '#aaa' },
  newspara:{color:'#AFB0B1',width:300,lineHeight:17,},
  news:{flexDirection:'row',justifyContent:'space-between'},
  bell:{width:50,height:50}
});