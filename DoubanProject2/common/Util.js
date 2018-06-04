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
    Dimensions,
    ActivityIndicator,

} from 'react-native';



/*

实现功能：定义多个属性，为项目提供一些功能使用；包括 屏幕尺寸、loading 组件、GET请求方法

*/



// 创建 类
export default Util = {

    // 屏幕尺寸
    windowSize:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },

    // get 网络请求封装
    getRequest(url,successCallback,failCallback){

        var opts = {
            method:'GET'
        };
        fetch(url,opts)
            .then((respone) => respone.json())
            .then((responseData) => successCallback(responseData))
            .catch((error) => failCallback(error));
    },

    // loading 效果
    loading:<ActivityIndicator style={{marginTop:200}} />,

    // 分割线
    sepLine: <View style={{
        flex:1,
        height:0.5,
        backgroundColor:'#e5e5e5',
    }}/>,

}
