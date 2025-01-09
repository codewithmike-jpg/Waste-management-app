import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Home from './Home';

const notifications = [
  {
    id: '1',
    title: 'Points successfully redeemed',
    time: '09:20 AM',
    section: 'Today',
    icon: 'check-circle',
  },
  {
    id: '2',
    title: 'Latest News',
    time: '06:12 AM',
    section: 'Today',
    icon: 'bookmark',
  },
  {
    id: '3',
    title: 'Points successfully redeemed',
    time: '10:50 AM',
    section: 'Last week',
    icon: 'check-circle',
  },
  {
    id: '4',
    title: 'Latest News',
    time: '10:20 AM',
    section: 'Last week',
    icon: 'bookmark',
  },
  {
    id: '5',
    title: 'Points successfully redeemed',
    time: '09:20 AM',
    section: 'Last week',
    icon: 'check-circle',
  },
  {
  id: '6',
  title: 'Points successfully redeemed',
  time: '09:20 AM',
  section: 'Last week',
  icon: 'check-circle',
},
{
  id: '7',
  title: 'Latest News',
  time: '10:20 AM',
  section: 'Last week',
  icon: 'bookmark',
},
{
  id: '8',
  title: 'Latest News',
  time: '10:20 AM',
  section: 'Last week',
  icon: 'bookmark',
},
];

const NotificationItem = ({ item }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <View style={[styles.notificationContainer, isPressed && styles.hoverEffect]}>
        <FontAwesome name={item.icon} size={20} color={isPressed ? "#388e3c" : "#4caf50"} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Notification = () => {
  const groupedNotifications = notifications.reduce((acc, item) => {
    acc[item.section] = [...(acc[item.section] || []), item];
    return acc;
  }, {});

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
            <FontAwesome name="arrow-left" size={20} color="gray" onPress={() => navigation.navigate('Home')}/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Notifications</Text>
            <TouchableOpacity>
            <FontAwesome name="check-circle" size={20} color="gray" />
            </TouchableOpacity>
        </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {Object.entries(groupedNotifications).map(([section, data]) => (
          <View key={section}>
            <Text style={styles.sectionTitle}>{section}</Text>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <NotificationItem item={item} />}
              scrollEnabled={false} // Disable FlatList scrolling (handled by ScrollView)
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
    marginLeft: -40,
  },
  iconButton: {
    padding: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  hoverEffect: {
    backgroundColor: '#e8f5e9',  // Light green background on press
    transform: [{ scale: 0.98 }], // Slight shrink effect
  },
  textContainer: {
    marginLeft: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  time: {
    fontSize: 12,
    color: '#777',
  },
});

export default Notification;