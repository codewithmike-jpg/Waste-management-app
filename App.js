import React, { useState } from 'react';
import { View, Text, TextInput,SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

export default function EditProfileScreen() {
  const handleUpdate = () => {
    // Simulate saving process (API call or AsyncStorage can be used here)
    Alert.alert('Success', 'Profile updated successfully!', [
      { text: 'OK' }
    ]);
    
    // You could also log the updated data
    console.log({
      name,
      email,
      dob,
      phone,
      address,
    });
  };


  const [name, setName] = useState('Fajar Firmansyah');
  const [email, setEmail] = useState('fajar092@gmail.com');
  const [dob, setDob] = useState('01 March 2004');
  const [phone, setPhone] = useState('089123102312');
  const [address, setAddress] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.title}>
        <FontAwesome name='arrow-left'size={22} color={'#333'} onPress={()=>navigation.navigate('ProfileInfo')}/>
        <Text style={styles.header}>Edit Profile</Text>
        </View>
        <Text style={styles.label}>Your Name</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={20} color="#555" />
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={20} color="#555" />
          <TextInput
            style={styles.input}
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </View>
        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.inputContainer}>
          <Feather name="calendar" size={20} color="#555" />
          <TextInput
            style={styles.input}
            value={dob}
            onChangeText={setDob}
          />
        </View>
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.countryCode}>+62</Text>
          <TextInput
            style={styles.input}
            value={phone}
            keyboardType="phone-pad"
            onChangeText={setPhone}
          />
        </View>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={[styles.input, styles.addressInput]}
          value={address}
          placeholder="Placeholder"
          onChangeText={setAddress}
          multiline
        />
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title:{
    flexDirection:'row',
    // alignItems: 'center',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 30, // Align buttons vertically in the center
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    // marginBottom: 30,
    left:'-35%'
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 10,
    marginTop: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  countryCode: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },
  addressInput: {
    height: 100,
    textAlignVertical: 'top',
    marginTop: 10,
    padding: 10,
    borderColor:'#E0E1E5',
    borderWidth:1,
    borderRadius:'20'
  },
  updateButton: {
    backgroundColor: '#00C853',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});