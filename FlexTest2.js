/**
 * Created by frank on 2018/5/21.
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
export default class FlexTest2 extends Component {

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


        var list = [];

        let l = ['1','2','3','4'];
        for (var i in l) {

            var view = (

                <Text style={styles.innerView }>
                    <Text style={styles.text}>{l[i]}</Text>
                </Text>
            )

            list.push(view);
        }


        return (
            <View style={styles.container}>
                {list}
            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    container: {
        flex:1,
        // flexDirection:'row-reverse',
        flexDirection:'row',
        backgroundColor:'gray',
        // margin:20,
        flexWrap:'wrap', // 多行显示
        justifyContent:'space-between', // 依照主轴对齐方式
        height:400,
        alignSelf:'flex-start',
    },

    innerView:{
        // width:40,
        // height:40,
        backgroundColor:'red',
        margin:10,

    },

    text:{
        fontSize:16,
    }

});