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


var name = "小明";
var age = '22';

// 导出变量
export {name,age};

/* 导出方法 */
export function sum(a,b){

  return a + b;
}


/* 导出组件 */
export default class LifecycleComponent extends Component<Props> {

  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        count:0,
      };
      console.log('----- constructor  ------')


    }



  /**/
  componentWillMount() {
    // 服务器端和客户端都只调用一次，在初始化渲染执行之前立刻调用。
    console.log('----- componentWillMount  ------')
  }

  componentDidMount() {
    // 在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。
    console.log('----- componentDidMount  ------')
  }

  componentWillReceiveProps(nextProps) {
  // 在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
    console.log('----- componentWillReceiveProps  ------')

  }

  // 该方法在初始化渲染的时候不会调用，在使用 forceUpdate 方法的时候也不会。
  // 如果确定新的 props 和 state 不会导致组件更新，则此处应该 返回 false。
  shouldComponentUpdate(nextProps, nextState) {
  // 在接收到新的 props 或者 state，将要渲染之前调用。
    console.log('----- shouldComponentUpdate  ------')

    return true

  }

  // 注意：你不能在该方法中使用 this.setState()。如果需要更新 state 来响应某个 prop 的改变，
  // 请使用 componentWillReceiveProps
  componentWillUpdate( nextProps, nextState) {
    // 在接收到新的 props 或者 state 之前立刻调用。
    console.log('----- componentWillUpdate  ------')

  }

  componentDidUpdate(prevProps, prevState) {
  // 在组件的更新已经同步到 DOM 中之后立刻被调用。
    console.log('----- componentDidUpdate  ------')

  }

  componentWillUnmount() {
    // 组件将要被移除之前
    console.log('----- componentWillUnmount  ------')

  }

  render(){

    console.log('----- render  ------')

    return <View>
      <Text
          style={styles.fText}
          onPress={()=>{
            this.setState({

              count:this.state.count + 1,
            })

          }}

      >点击点击</Text>
      <Text>被点了{this.state.count}次 </Text>
    </View>
  };
}


const styles = StyleSheet.create({
  fText: {
    fontSize: 20,
    backgroundColor: 'red'
  },

});
