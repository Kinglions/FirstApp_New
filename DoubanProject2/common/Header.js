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
    TouchableOpacity,

} from 'react-native';


import PropTypes from 'prop-types'
import Icon from './Icon'

/*

实现功能：封装 header，在头部展示标题和返回按钮

包含组件：

外部传入：
    navigator：点击返回按钮返回上一级页面
    initObj（backName，title）返回按钮名称、标题


*/

var icon = require('./1.png');


// 创建 类
export default class Header extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    // 配置默认属性
    static defaultProps = {
        initObj: null,
        navigator:null,

    }

    // 属性检查
    static propTypes = {
        initObj:PropTypes.shape({
            backName:PropTypes.string.isRequired,
            barTitle:PropTypes.string.isRequired,
        }),
        navigator:PropTypes.object.isRequired,

    }

    // 返回按钮方法
    _pop=()=>{
        this.props.navigator.pop();
    }

    // 渲染视图
    render() {

        // 获取 obj 对象，包括： backName（按钮名称）、barTitle

        var headerContent = this.props.initObj;

        return (
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this._pop}
                >
                    <Icon/>
                    <Text style={styles.btn_text}>{headerContent.backName}</Text>
                </TouchableOpacity>
                <View style={styles.title_container}>
                    <Text style={styles.title} numberOfLines={1}>{headerContent.barTitle}</Text>
                </View>
            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    header: {
        height:44,
        backgroundColor:'#3497FF',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    left_Btn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    btn_text:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold',
    },
    title_container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        lineHeight:18,
        width:200,
    }

});