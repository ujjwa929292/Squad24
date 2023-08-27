import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../images/upi.png')}
        style={styles.profileImage1}
      />
      <Image
        source={require('../images/paypal.png')}
        style={styles.profileImage2}
      />
      <Image
        source={require('../images/visa.png')}
        style={styles.profileImage3}
      />
      <Image
        source={require('../images/master.png')}
        style={styles.profileImage4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 20,
    borderBottomColor: '#ddd',
    marginBottom: 5
  },
  profileImage1: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F5FCFF',
    marginLeft: 5,
  },
  profileImage2: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F5FCFF',
    marginLeft: 5,
  },
  profileImage3: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F5FCFF',
    marginLeft: 5,
  },
  profileImage4: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F5FCFF',
    marginLeft: 5,
  },
});
export default Header;