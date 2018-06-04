/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class HelloComponent extends Component {

  render(){
    return <Text style={styles.fText}>Hello.{this.props.name}</Text>
  };
}


const styles = StyleSheet.create({
  fText: {
    fontSize: 20,
    backgroundColor: 'red'
  },

});
