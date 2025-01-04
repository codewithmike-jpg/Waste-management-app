import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import History from '../screens/History';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#555',
        headerShown: false,
        tabBarStyle: { height: 60, paddingBottom: 10 }
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
           name="Profile" 
           component={Profile} 
           options={{
             tabBarIcon: ({ color, size }) => (
               <Icon name="person-outline" color={color} size={size} />
             )
           }}
         />
         <Tab.Screen 
           name="Settings" 
           component={History} 
           options={{
             tabBarIcon: ({ color, size }) => (
               <Icon name="settings-outline" color={color} size={size} />
             )
           }}
         />
       </Tab.Navigator>
     );
   }
   
   