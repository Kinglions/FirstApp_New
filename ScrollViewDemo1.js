/**
 * Created by frank on 2018/5/22.
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
    ScrollView,
    RefreshControl,

} from 'react-native';


import PropTypes from 'prop-types'


// 创建 类
export default class ScrollViewDemo1 extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }

    // 配置默认属性
    static defaultProps = {
        // name:'name',

    }

    // 属性检查
    static propTypes = {
        // name:PropTypes.string,
        // sex:PropTypes.number.isRequired,

    }


    // 开始拖拽
    _onScrollBeginDrag=()=>{
        console.log('开始拖拽');
    };
    // 结束拖拽
    _onScrollEndDrag(){
        console.log('结束拖拽');
    };
    // 开始滑动
    _onMomentumScrollBegin(){
        console.log('开始滑动');
    };
    // 结束滑动
    _onMomentumScrollEnd(){
        console.log('结束滑动');
    };

    //刷新方法
    _onRefresh=()=>{
        console.log('刷新');

    };

    // 渲染视图
    render() {

     /*
        一般来说我们会给ScrollView设置flex: 1以使其自动填充父容器的空余空间，
        但前提条件是所有的父容器本身也设置了flex或者指定了高度，否则就会导致无法正常滚动

        scrollView 的简单实现
        实现检测拖拽、滑动的相关实现
        添加几个子组件

https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json




     */
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={true}
                    onScrollBeginDrag={this._onScrollBeginDrag}
                    onScrollEndDrag={this._onScrollEndDrag.bind(this)}
                    onMomentumScrollBegin={this._onMomentumScrollBegin.bind(this)}
                    onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
                    refreshControl={
                        <RefreshControl
                            refreshing={true}
                            tintColor='red'
                            title='正在刷新...'
                            onRefresh={this._onRefresh}
                        />
                    }
                >

                    <View style={styles.view_1}></View>
                    <View style={styles.view_2}></View>
                    <View style={styles.view_3}></View>
                </ScrollView>
            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#e5e5e5',
    },
    scrollView:{
        marginTop:25,
        backgroundColor:'#ccc'
    },
    view_1:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:'yellow'
    },
    view_2:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:'red'
    },
    view_3:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:'green'
    },


});