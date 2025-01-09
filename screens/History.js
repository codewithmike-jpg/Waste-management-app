import React, { useState } from 'react';
import { View, SafeAreaView,Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const History = () => {
  const [filter, setFilter] = useState('All');

  // Sample data
  const data = [
    { id: '1', type: 'Garbage', action: 'Garbage Handover', points: '+2000', date: 'Today' },
    { id: '2', type: 'Points', action: 'Points Redemption Successful', points: '-500', date: 'Today' },
    { id: '3', type: 'Garbage', action: 'Garbage Handover', points: '+2000', date: 'Monday, July 1, 2024' },
    { id: '4', type: 'Garbage', action: 'Garbage Handover', points: '+2000', date: 'Monday, July 1, 2024' },
    { id: '5', type: 'Points', action: 'Points Redemption Successful', points: '-700', date: 'Today' },
    { id: '6', type: 'Points', action: 'Points Redemption Successful', points: '-500', date: 'Monday, July 1, 2024' },
    { id: '7', type: 'Points', action: 'Points Redemption Successful', points: '+700', date: 'Monday, July 1, 2024' },
  ];

  const filteredData = filter === 'All' ? data : data.filter(item => item.type === filter);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <Icon name="cube-outline" size={24} color="#34a853" />
        <Text style={styles.action}>{item.action}</Text>
      </View>
      <Text style={item.points.startsWith('+') ? styles.positive : styles.negative}>{item.points}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.btyr}>
        <Text style={styles.title}>History</Text>
        {/* Filter Tabs */}
        <View style={styles.filters}>
          {['All', 'Garbage', 'Points'].map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.filterButton, filter === tab && styles.activeFilter]}
              onPress={() => setFilter(tab)}>
              <Text style={filter === tab ? styles.activeFilterText : styles.filterText}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* List */}
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        {/* Floating Action Buttons */}
        {/* <TouchableOpacity
          style={styles.fabAll}
          onPress={() => setFilter('All')}>
          <Icon name="filter-variant" size={20} color="#fff" />
          <Text style={styles.fabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fabGarbage}
          onPress={() => setFilter('Garbage')}>
          <Icon name="recycle" size={20} color="#fff" />
          <Text style={styles.fabText}>Garbage</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
      backgroundColor: '#fff'
     },
     title:{
      alignItems:'center',
      marginTop:20,
      marginBottom:20,
      left:'50%',
      fontSize:22,
     },

  filters: { 
     flexDirection: 'row',
     justifyContent: 'space-between',
      // marginVertical: 10 
    },
  filterButton: {
     paddingHorizontal: 20,
      paddingVertical: 10 
    },

  activeFilter: {
     borderBottomWidth: 2, 
     borderBottomColor: '#34a853' 
    },

  filterText: { 
    color: '#aaa'
   },

  activeFilterText: { 
    color: '#34a853' 
  },

  item: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemContent:{
     flexDirection: 'row',
    //  alignItems: 'center'
     },
  action: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10 
  },
  positive: { 
    fontSize: 16, 
    color: '#34a853'
   },
  negative: { 
    fontSize: 16, 
    color: '#d93025'
   },
  // fabAll: {
  //   position: 'absolute',
  //   bottom: 80,
  //   left: 20,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#34a853',
  //   padding: 10,
  //   borderRadius: 50,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 2,
  //   elevation: 5,
  // },
  // fabGarbage: {
  //   position: 'absolute',
  //   bottom: 80,
  //   right: 20,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#34a853',
  //   padding: 10,
  //   borderRadius: 50,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 2,
  //   elevation: 5,
  // },
  // fabText: { color: '#fff', marginLeft: 5, fontSize: 16 },
});

export default History;