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
    TextInput,
    TouchableOpacity,

} from 'react-native';


import PropTypes from 'prop-types'


// 创建 类
export default class SearchBar extends Component {

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


    // 渲染视图
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    {/* 使用 {...this.props} 延展方法 接收外部传入设置 */}
                    <TextInput style={styles.input} {...this.props}/>
                </View>
                <TouchableOpacity style={styles.btn} {...this.props}>
                    <Text style={styles.search}>搜索</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

// 样式表
const styles = StyleSheet.create({

    container: {

        justifyContent:'flex-end', // 以右侧按钮大小为基础
        alignItems:'center',
        flexDirection:'row',
        height:44,
        marginTop:10,
        backgroundColor:'white',
    },
    inputContainer:{
        flex:1,
        marginLeft:5,
        marginTop:3,
        marginBottom:3,
    },
    input:{
        flex:1,
        height:44,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#ccc',
        padding:5,
        
    },
    btn:{
        width:55,
        height:44,
        marginLeft:5,
        marginRight:5,
        backgroundColor:'#23BEFF',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    search:{
        flex:1,
        color:'#fff',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:44,
    },

});