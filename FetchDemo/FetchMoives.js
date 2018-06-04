/**
 * Created by frank on 2018/5/25.
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
    TouchableOpacity,

} from 'react-native';


import PropTypes from 'prop-types'

/*

展示电影列表

逻辑：为获取到数据时，显示等待页面，获取数据时，显示电影列表页面

需要给 state 添加一个属性，标记下载状态

http://cache.video.iqiyi.com/jp/avlist/202861101/1/?callback=json

*/


// 创建 类
export default class FetchMoives extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            /* 数据是否下载成功的标识 */
            loaded: false ,
        };
    }

    /* 数据加载时显示的页面 */
    loadingView=()=>{

        return (
            <View>
                <Text>Loading movies......</Text>
            </View>
        );
    };

    // 渲染视图
    render() {

        if (!this.state.loaded){

        }

        return (
            <View>

            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    container: {},

});