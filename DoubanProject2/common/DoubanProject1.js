/**
 * Created by frank on 2018/5/28.
 */

/**
 * https://reactnative.cn/docs/0.51/getting-started.html
 */

// 导入 RN 模块包组件
import React, {Component} from 'react';
import {

    Platform,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    StatusBar,
    Image,

} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'

import PropTypes from 'prop-types'

import {BookStack, EventStack, MovieStack} from './Navigation'
import Events_home from "../Events/Events_home";

StatusBar.setHidden(false);




const TabBarScreen = createBottomTabNavigator({

    Book:{
        screen:BookStack,
        navigationOptions:{
            tabBarLabel:'图书',
        }
    },
    Movie:{
        screen:MovieStack,
        navigationOptions:{
            tabBarLabel:'电影',
        }
    },
    Events_home:{
        screen:EventStack,
        navigationOptions:{
            tabBarLabel:'同城活动',
        }
    }

},{
    initialRouteName:'Book', // 设置默认路由

    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: 'white',
        },

    },

    navigationOptions:({navigation}) => ({

        headerStyle:{
            backgroundColor:'red',
        },
        headerTintColor: 'blue',
        headerTitleStyle:{
            fontWeight:'bold',
            color:'white',
            fontSize:18,
        },


        // tabBarLabel: ({focused,tintColor})=>{
        //
        //     const {routeName} = navigation.state;
        //
        //     console.log(routeName);
        //     var text = '';
        //     var dict = {};
        //     if (routeName === 'Book') {
        //         text = '图书';
        //     }else {
        //         text = '电影';
        //     }
        //
        //     if (focused) {
        //         dict = {fontSize:12, color:'blue'};
        //     }else {
        //         dict = {fontSize:12, color:'#666666'};
        //     }
        //
        //     return <Text style={{...dict}}>text</Text>;
        //
        // },

        tabBarIcon: ({focused,tintColor}) => {

            const {routeName} = navigation.state;
            var iconName = focused ? require('./1.png') : require('./2.png');
            return <Image
                source={iconName}
                style={styles.img}
            />
        },
    }),
});



// 创建 类
export default class DoubanProject1 extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:'图书',
        };
    }

/*
使用 createBottomTabNavigator 配置

*/
render(){

    return <TabBarScreen/>
}



/*
    使用 TabBarIOS 组件进行添加配置
 */
//     // 渲染视图
//     render() {
//
//         return (
//             <TabBarIOS>
//                 <TabBarIOS.Item
//                     title='图书'
//                     renderAsOriginal={true} // 如果为false，只会显示纯色图片 默认为 false
//                     icon={require('./1.png')}
//                     selectedIcon={require('./2.png')}
//                     selected={this.state.selectedTab === '图书'}
//                     onPress={() => {
//                         this.setState({
//                             selectedTab: '图书',
//                         })
//                     }}
//
//                 >
//                     <Navigation/>
//                 </TabBarIOS.Item>
//                 <TabBarIOS.Item
//                     title='电影'
//                     renderAsOriginal={true} // 如果为false，只会显示纯色图片 默认为 false
//                     icon={require('./1.png')}
//                     selectedIcon={require('./2.png')}
//                     selected={this.state.selectedTab === '电影'}
//                     onPress={() => {
//                         this.setState({
//                             selectedTab: '电影',
//                         })
//                     }}
//
//                 >
//                     <View style={{backgroundColor: 'red'}}></View>
//                 </TabBarIOS.Item>
//             </TabBarIOS>
//         );
//     }
}

// 样式表
const styles = StyleSheet.create({

    container: {},

});