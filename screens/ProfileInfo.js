import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ProfileInfo= () => {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Profile image URL
          style={styles.profileImage}
        />
        <Text style={styles.name}>Fajar Firmansyah</Text>
        <Text style={styles.email}>fajar123@gmail.com</Text>
      </View>

      {/* Personal Info Section */}
      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Personal Info</Text>

        {/* Phone Number */}
        <View style={styles.infoRow}>
          <Icon name="phone" size={20} color="#888" />
          <View style={styles.infoText}>
            <Text style={styles.label}>Phone No.</Text>
            <Text style={styles.value}>089885000912</Text>
          </View>
        </View>

        {/* Date of Birth */}
        <View style={styles.infoRow}>
          <Icon name="calendar" size={20} color="#888" />
          <View style={styles.infoText}>
            <Text style={styles.label}>Date of Birth</Text>
            <Text style={styles.value}>1 Maret 2004</Text>
          </View>
        </View>

        {/* Address */}
        <View style={styles.infoRow}>
          <Icon name="map-pin" size={20} color="#888" />
          <View style={styles.infoText}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>
              Jl. Sudirman 123, Kecamatan 
            </Text>
            <Text style={styles.value}>
               Cibungbulang, Desa Cibatok
            </Text>
          </View>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Icon name="edit-2" size={18} color="#fff" />
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    color: 'grey',
  },
  infoCard: {
    // backgroundColor: '#f8f8f8',
    // borderRadius: 15,
    padding: 20,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    marginLeft: 15,
  },
  label: {
    fontSize: 14,
    color: 'grey',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ProfileInfo;