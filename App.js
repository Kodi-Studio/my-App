import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import About from './components/About'
import Home from './components/Home'

/// gestion de la navigation tabs
import { TabNavigator } from 'react-navigation'


const Tabs = TabNavigator({

  Home: { screen: Home },
  About: { screen: About }

},{
  tabBarOptions: {
    
    style: {
      backgroundColor: '#cc0000'
    }
  

  }
  
})


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}} >
        <StatusBar hidden={true} />
        
          <Tabs />
        
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
