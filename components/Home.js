import React from 'react';
import { StyleSheet, Text, View , TextInput } from 'react-native';


export default class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = { placeHolder: 'Login' };
  } 

  render() {
    return (
      <View>

        <Text>Welcome hom</Text>
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
  inputText: {
    borderWidth: 1,
    borderColor: "#000"
  }
});