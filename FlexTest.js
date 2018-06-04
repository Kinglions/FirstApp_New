/**
 * Created by frank on 2018/5/18.
 */


import React, { Component } from 'react';

import {

    Platform,
    StyleSheet,
    Text,
    View

} from 'react-native';

import PropTypes from 'prop-types'

export default class FlexTest extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
      }
      // 配置默认属性
      static defaultProps={
        // name:'name',

      }

      // 属性检查
      static propTypes={
          // name:PropTypes.string,
          // sex:PropTypes.number.isRequired,

      }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.child1}>

                </View>
                <View style={styles.child2}>

                </View>
            </View>
        );
    };
}

/*
 * flex 可以给组件指定 flex,值为数
 *
 * 1 : 表示组件可以撑满 父组件的剩余空间,
 * 同时存在多个并列的子组件时, flex:1 表示 均分
 *
 *
 * */

const styles = StyleSheet.create({

    container:{

        margin:30,
        width:300,
        height:500,
        backgroundColor:"yellow",

        // 默认主轴方向是 column
        // 设置为 横向排列
        flexDirection:'row',

        // 对齐方式
        justifyContent:"center",

        // 交叉轴
        alignItems:"center"

    },
    child1:{

        width:100,
        height:100,
        backgroundColor:'green'
    },
    child2:{
        width:100,
        height:100,
        backgroundColor:"blue"
    }
});

