/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


/* 导出组件 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



/* 导出类、方法 */
export default class EIComponent extends Component {

  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {};

    }

  /* 视图渲染 */
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
