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


import PropTypes from 'prop-types'


// 创建 类
export default class Icon extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
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


    // 渲染视图
    render() {

        return (
            <View>
                <View style={styles.go}></View>
            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    go: {
        width:15,
        height:15,
        borderLeftWidth:2,
        borderBottomWidth:2,
        borderColor:'#fff',
        marginLeft:10,
        transform:[{rotate:'45deg'}] // 将一个矩形框旋转 45 度
    },
});