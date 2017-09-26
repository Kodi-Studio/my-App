import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class About extends React.Component {

  static navigationOptions = {

    tabBarIcon: (focused: true ) => {
      return <Image source={ require('./icons/user.png') } style={{width:20, height: 20 }}  />
    }

  }


  render() {
    return (
      <View style={styles.container}>
        <Text>About me</Text>
        <Text>Texte de présentation</Text>
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
