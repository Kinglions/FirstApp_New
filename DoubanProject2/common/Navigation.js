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
    View

} from 'react-native';


import Book_list from './../books/Book_list'

import { createStackNavigator,StackNavigator } from 'react-navigation'

import PropTypes from 'prop-types'
import Book_detail from "../books/Book_detail";
import CustomWebView from "./CustomWebView";
import Movie_Pages from "../movies/Movie_Pages";
import Events_home from "../Events/Events_home";
import Util from "./Util";


/*

实现功能： 封装 导航器初始化设置

包含组件：Navigator

外部传入：
    component 需要展示的页面组件
    route 对象 必须添加component 属性；

*/

/*

配置导航路由：

initialRouteName：设置根视图路由

*/
export const BookStack = createStackNavigator(

    {
        Book: {
            screen: Book_list,
            // navigationOptions: {
            //     headerTitle: '图书',
            //     // header:null, // 隐藏顶部导航
            //     tabBarLabel: '图书', // 优先级低于 tabBar 中设置
            //
            //     headerStyle:{
            //         backgroundColor:'red',
            //     },
            // },
        },
        Detail:{
            screen:Book_detail,
        },


    }

);
// 隐藏子页面 tabBar标签栏
BookStack.navigationOptions = Util.navTabSetting

export const MovieStack = createStackNavigator(

    {
        Movie: {
            screen: Movie_Pages,
        },
        Movie_detail:{
            screen:CustomWebView,
        }
    }
);
MovieStack.navigationOptions = Util.navTabSetting

export const EventStack = createStackNavigator(
    {
        Events_home:{screen:Events_home}
    }
);
EventStack.navigationOptions = Util.navTabSetting

