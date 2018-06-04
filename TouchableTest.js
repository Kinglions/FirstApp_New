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
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    Alert,

} from 'react-native';


import PropTypes from 'prop-types'


/*

Reactnative 提供的 3 个组件用于给其他没有触发事件的组件绑定触发事件，需要导入模块

TouchableWithoutFeedback：   无反馈性触发，点击时，组件无视觉变化；

TouchableOpacity：           透明触摸，点击时，组件会出现透明度过渡效果

TouchableHighlight：         高亮触摸，点击时，组件会出现高亮效果

*/


// 创建 类
export default class TouchableTest extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            count:0, // 统计单击次数
            btnCount:0,
            text:'', // 登录文本
            waiting:false, // 登录按钮是否可以点击
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


    clickBtn() {
        alert('点击了搜索按钮');
    }

    // 渲染视图
    render() {

        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={()=>{

                        this.setState({
                            count:this.state.count + 1
                        });
                    }}

                    onLongPress={()=>Alert.alert(
                        '提示',
                        '确认删除吗？',
                        [
                            {text:'取消', onPress:()=>{}, style:'cancel'},
                            {text:'确定', onPress:()=>{
                                this.setState({
                                    count:this.state.count - 1,
                                })
                                }},
                        ])
                    }
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>我是一个 TouchableWithoutFeedback ,点击我</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text>您单击了：{this.state.count}次</Text>




                <Button title='我是一个按钮，点击我' color='red' onPress={()=>{

                    this.setState({
                        btnCount:this.state.btnCount + 1,
                    })
                }}/>
                <Text>您点击了按钮：{this.state.btnCount}</Text>


                <TouchableWithoutFeedback
                    disabled={this.state.waiting}

                    onPress={()=>{
                        this.setState({
                            text:'正在登录...',
                            waiting:true
                        });

                        // 设置超时回调
                        setTimeout(()=>{
                            this.setState({
                                text:'网络不流畅',
                                waiting:false,
                            });
                        },2000);


                    }}>
                    {/* 配置标题 */}
                    <View style={styles.button}>
                        <Text>登录按钮</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text>{this.state.text}</Text>

                {/* 搜索组件 */}
                <View style={styles.container}>
                    <View style={styles.flex}>
                        <View style={styles.input}>

                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.searchBtn}
                        onPress={()=>{this.clickBtn.bind(this)}}
                    >
                        <Text style={styles.search}>搜索</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    button: {
        margin:10,
        backgroundColor:'yellow',
        borderWidth:1,
        borderRadius:20,
        height:40,
        padding:10,
        alignItems:'center',

    },

    buttonText: {

    },

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