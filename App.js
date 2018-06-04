/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


/* *
 *  一: 导入的 RN 包,导入 RN 组件
 * */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


import LifecycleComponent,{name,age,sum} from './LifecycleComponent'
import StyleSheetTest from './StyleSheetTest'
import FlexTest from './FlexTest'
import ViewTest from './ViewTest'
import TextTest from './TextTest'
import FlexTest2 from './FlexTest2'
import TouchableTest from './TouchableTest'
import ImageTest from './ImageTest'

import TextInputTest from './TextInputTest'
import ScrollViewDemo1 from './ScrollViewDemo1'
import ScrollViewMovies from './ScrollViewMovies'
import ListViewDemo1 from "./ListViewDemo1";
import ListViewMovies from './ListViewMovies'
import FlatListMovies from "./FlatListMovies";
import SectionListMovies from './SectionListMovies'

import StackNavTest from './NavigationDemo/StackNavTest'
import FetchTest from './FetchDemo/FetchTest'

import DoubanProject1 from './DoubanProject2/common/DoubanProject1'
import FetchTest2 from "./FetchDemo/FetchTest2";

type Props = {};
export default class App extends Component<Props> {

  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {

        remove:false,
        result:''
      };


      var a = [];
      for (var i = 0;i < 10; i++){
        a[i] = function(){
          // console.log(i);
        };
      }
      a[6]();

      console.log(foo);
      var foo = 2;

      console.log(ccc);
      let ccc = 1;

    }


  render() {

    var view = this.state.remove?null:<LifecycleComponent/>;
    var text = this.state.remove?"让他复活了":"干掉他";
    return (

      <View style={styles.container}>

        {/*<Text*/}
            {/*onPress={()=>{*/}
            {/*this.setState({*/}
              {/*remove:!this.state.remove*/}
            {/*});*/}
            {/*}}*/}
         {/*>{text}</Text>*/}
        {/*{view}*/}
        {/*<Text>名字:{name}</Text>*/}
        {/*<Text>年纪:{age}</Text>*/}
        {/*<Text onPress={()=>{*/}

          {/*var result = sum(2,3);*/}
          {/*this.setState({*/}
            {/*result:result,*/}
          {/*});*/}

        {/*}}>2 + 3 = {this.state.result}</Text>*/}

        {/*<ViewTest/>*/}

        {/*<TextTest/>*/}

        {/*<FlexTest2/>*/}

        {/*<TouchableTest/>*/}

        {/*<ImageTest/>*/}

        {/*<TextInputTest/>*/}

        {/*<ScrollViewDemo1/>*/}

        {/*<ScrollViewMovies/>*/}

        {/*<ListViewDemo1/>*/}

        {/*<ListViewMovies/>*/}

        {/*<FlatListMovies/>*/}

        {/*<SectionListMovies/>*/}

        {/*<TabBarNavDemo/>*/}

        {/*<StackNavTest/>*/}

        {/*<FetchTest/>*/}

        <DoubanProject1/>

        {/*<FetchTest2/>*/}

      </View>

  );
  }
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // flexDirection:'column',
    backgroundColor: '#F5FCFF',
    // marginTop:50,
    flex: 1,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
