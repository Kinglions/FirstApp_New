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
    WebView,

} from 'react-native';


import PropTypes from 'prop-types'
import Header from "./Header";


/*

实现功能：封装 webView，根据传入的 url 展示网页信息

包含组件： Header、WebView

外部传入：

    给 Header 设置：navigation、initObj（backName、title）
    给 WebView 设置：source

*/

// 创建 类
export default class CustomWebView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    // // 配置默认属性
    // static defaultProps = {
    //     backName:'',
    //     barTitle:'',
    //
    // }


    /*配置  navigationOptions 属性（比如：标题）*/
    static navigationOptions = ({navigation}) => {

        console.log(navigation.getParam('url'))

        return {
            title: navigation.getParam('title', 'placeHold title'),
        }
    }


    _onLoadEnd = () => {

    }
    // 渲染视图
    render() {

        return (
            <View style={styles.container}>

                <WebView
                    startInLoadingState={true}
                    contentInset={{top:-44, bottom:-150}} // 隐藏 网页本身的 头部
                    source={{url:this.props.navigation.getParam('url')}}
                    onLoadEnd={this._onLoadEnd}
                />
            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'white',
    },

});