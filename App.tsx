/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Body />
      </ScrollView>
    </SafeAreaView>
  );
};

const Body = () => {
  return (
    <View style={styles.body}>
       <View style={styles.cardView}>
          <Text style={styles.infoTitle}>Temparature</Text>
          <Text>30 do C</Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.infoTitle}>Heart Rate</Text>
          <Text>130</Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.infoTitle}>Spo2</Text>
          <Text>120</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
  },
  cardView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
    margin: 15,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },


});

export default App;
