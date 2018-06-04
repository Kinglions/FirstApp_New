/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


/* 导出组件 */

import React, { Component,PropTypes } from 'react';


import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



/* 导出类、方法 */
export default class PropsTest extends Component {

  /*
  * 目标测试 StyleSheet 样式,创建一个盒子模型
  * */

  render(){
    return (
        <View style={styles.container}>
          <View style={[styles.border,styles.top]}>

          </View>
          <View style={[styles.border,styles.bottom]}>

          </View>
        </View>
    );
  };
}



  const styles = StyleSheet.create({

    // 外层 View
    container: {

      marginTop:25,
      marginLeft:30,
      backgroundColor:"red",
      width:300,
      height:400,
    },

  //  上层 View
    top:{

      backgroundColor:"green",
      width:280,
      height:250,
      margin:10,

    },
  //  下层 View
    bottom:{
      backgroundColor:"yellow",
      width:280,
      height:110,
      margin:10,

    },
    /*
    * 设置公共样式,进行样式拼接【 在列表中进行拼接样式,后面的样式优先级高于前面的优先级 】
    * */
  border: {
    borderWidth:3,
    borderColor:'black'
  }

  });

