import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          style={styles.photo}
        />
        <Text style={styles.name}>Ujjwal Vij</Text>
        <Text style={styles.email}>Uvij027@gmail.com</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.sectionText}>Hello, I am a software developer with experience in React Native, Node.js, and JavaScript.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <Text style={styles.sectionText}>I am interested in learning new technologies, programming languages, and building innovative products.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.sectionText}>I have completed my Bachelor's in Technology in Computer Science and Engineering from Lovely Professional University.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          <Text style={styles.sectionText}>I have worked as an intern at XYZ company for 6 months and have hands-on experience in developing React Native apps and REST APIs using Node.js.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F5FF', // Blue color theme
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    backgroundColor: '#FFF',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 5,
    borderColor: '#FFF',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1E90FF', // Blue color theme
  },
  email: {
    fontSize: 16,
    color: '#1E90FF', // Blue color theme
    marginBottom: 20,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1E90FF', // Blue color theme
  },
  sectionText: {
    fontSize: 16,
    color: '#696969',
  },
});

export default Profile;
