import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';
import Sidebar from './Sidebar';

const logo = require('../images/google-logo.png');
const menuIcon = require('../images/menu-icon.png');
const helpIcon = require('../images/help-icon.png');
const chatIcon = require('../images/chat-icon.png');

const Home = () => {
  const [guardsHired, setGuardsHired] = useState(12);
  const [userRatings, setUserRatings] = useState([
    { x: 1, y: 3 },
    { x: 2, y: 4 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 4 },
    { x: 6, y: 4.5 },
  ]);

  const [animatedData, setAnimatedData] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const animateLine = () => {
      const data = [];
      for (let i = 0; i < userRatings.length; i++) {
        setTimeout(() => {
          data.push(userRatings[i]);
          setAnimatedData([...data]);
        }, i * 100);
      }
    };

    animateLine();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon} onPress={toggleSidebar}>
          <Image source={menuIcon} style={styles.menuIconImage} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Security App</Text>
        <TouchableOpacity style={styles.helpIcon}>
          <Image source={helpIcon} style={styles.helpIconImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {sidebarOpen && <View style={styles.overlay} />}
        {sidebarOpen && <Sidebar />}
        <ScrollView style={styles.content}>
          <View style={styles.chartContainer}>
            <Text style={styles.subtitle}>Guards Hired Till Now:</Text>
            <VictoryChart
              theme={VictoryTheme.material}
              width={Dimensions.get('window').width - 40}
              height={200}
            >
              <VictoryLine
                data={animatedData}
                style={{
                  data: {
                    stroke: '#6C63FF',
                    strokeWidth: 2,
                  },
                }}
              />
            </VictoryChart>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.chatIcon}>
        <Image source={chatIcon} style={styles.chatIconImage} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#6C63FF',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
  },
  menuIcon: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 999,
  },
  menuIconImage: {
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  helpIcon: {
    position: 'absolute',
    top: 55,
    right: 7,
    zIndex: 999,
  },
  helpIconImage: {
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 998,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chartContainer: {
    marginVertical: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  chatIcon: {
    position: 'absolute',
    bottom: 67, 
    right: 7,
    zIndex: 999,
    width: 50, 
    height: 50, 
    borderRadius: 40, 
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatIconImage: {
    width: 30, 
    height: 30, 
    tintColor: '#fff',
  },
});

export default Home;
