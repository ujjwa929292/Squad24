import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const Sidebar = () => {
  const handleMenuItemPress = (menuItem) => {
    // Handle the press event based on the selected menu item
    console.log('Pressed', menuItem);
  };

  return (
    <View style={styles.sidebarContainer}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image source={require('../images/guard5.jpeg')} style={styles.profileImage} />
        </View>
        <Text style={styles.profileName}>Ujjwal Vij</Text>
        <Text style={styles.profileEmail}>uvij027@gmail.com</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.sidebarItem}
          onPress={() => handleMenuItemPress('Dashboard')}
        >
          <Text style={styles.sidebarItemText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sidebarItem}
          onPress={() => handleMenuItemPress('Profile')}
        >
          <Text style={styles.sidebarItemText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sidebarItem}
          onPress={() => handleMenuItemPress('Settings')}
        >
          <Text style={styles.sidebarItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sidebarItem}
          onPress={() => handleMenuItemPress('Logout')}
        >
          <Text style={styles.sidebarItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
    paddingHorizontal: 20,
    zIndex: 999,
    elevation: 5,
  },
  profileContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 14,
    color: '#777',
  },
  divider: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 20,
  },
  buttonsContainer: {
    flex: 1,
  },
  sidebarItem: {
    marginBottom: 20,
  },
  sidebarItemText: {
    color: '#000',
    fontSize: 16,
  },
});

export default Sidebar;
