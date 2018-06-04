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
    TextInput,
    TouchableOpacity,

} from 'react-native';


import PropTypes from 'prop-types'


// 创建 类
export default class TextInputTest extends Component {

    // 输入框的 onChange 实现
    getContent(text){
        this.setState({

           inputText:text,
        });
    }

    clickBtn() {
        alert(this.state.inputText);
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            inputText:''
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
                <View style={styles.flex}>
                    <TextInput
                        style={styles.input}
                        returnKeyType='search'
                        placeholder='请输入内容'
                        onChangeText={this.getContent.bind(this)}
                        // onChangeText={(text)=>{this.setState({inputText:text})}}
                    />
                </View>
                <TouchableOpacity
                    style={styles.searchBtn}
                    onPress={this.clickBtn.bind(this)}>
                    <Text style={styles.search}>搜索</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({


    container:{
        flexDirection: 'row',
        height:45,
        marginTop:25
    },
    flex:{
        flex:1,
    },
    input:{
        height:45,
        borderWidth:1,
        marginLeft:5,
        borderColor:'#ccc',
        borderRadius:5,
    },

    searchBtn: {
        width:55,
        marginLeft:5,
        marginRight:5,
        backgroundColor:"#23BEFF",
        height:45,
        justifyContent:'center',
        alignItems:'center',
    },
    search:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold',
    }

});