import React, { useState } from 'react';
import { View, Text, Image, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// Profile Screen Component
const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Fajar Firmansyah</Text>
          <Text style={styles.email}>fajar092@gmail.com</Text>
        </View>
        <TouchableOpacity>
          <Icon name="settings" size={24} color="green"/>
        </TouchableOpacity>
      </View>

      <View style={styles.accountSection}>
        <Text style={styles.sectionTitle}>Account</Text>

        <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('ProfileInfo')}>
          <Icon name="user" size={20} color="black" />
          <Text style={styles.optionText}>Edit Profile</Text>
          <Icon name="chevron-right" size={20} color="grey" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="bell" size={20} color="black" />
          <Text style={styles.optionText}>Notification</Text>
          <Icon name="chevron-right" size={20} color="grey" />
        </TouchableOpacity>

        <View style={styles.option}>
          <Icon name="moon" size={20} color="black" />
          <Text style={styles.optionText}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleSwitch} />
        </View>

        <TouchableOpacity style={styles.logout}>
          <Icon name="log-out" size={20} color="red" />
          <Text style={styles.logoutText}>Logout</Text>
          <Icon name="chevron-right" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: 'grey',
  },
  accountSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    borderWidth: 1,   
    borderColor:'#E0E1E5',
    borderRadius:25,
    padding:10,
    marginTop:20
  },
  optionText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 1,   
    borderColor:'red',
    borderRadius:25,
    padding:10,
    marginTop:20,
    
  },
  logoutText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: 'red',
  },
});

export default Profile; 