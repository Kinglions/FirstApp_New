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


// 创建 类
export default class FetchTest extends Component {

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


    /*

       语法：链式调用

       fetch(url, opts)
            url：表示请求的地址
            opts：请求方式（get、post），可以封装成为对象，包含请求方式、参数配置等

             var opts = {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    firstParam: 'yourValue',
                    secondParam: 'yourOtherValue',
                  }

       .then(完成回调函数)
       .catch(失败之后的回调函数)


       fetch( url, opts)
       .then((response) => {
            // 网络请求成功执行该回调函数，得到相应对象，通过 response 可以获取请求的数据
            // 例如：json、text 等

            return response.text();
            // return response.json();
       })
       .then((responseData) => {
            // 处理请求得到的数据

       })
       .catch((error) => {
            // 网络请求失败执行该回调函数，得到错误信息
       })

    */


    _getRequest(url){

        var opts = {
            method: 'GET'
        }

        console.log(url);

        fetch(url,opts)
            .then((response)=>{

                /* 返回一个带有文本的对象 */
                return response.text();
            })
            .then((responseData)=>{

                /* 处理上步返回的对象内容 */
                alert(responseData);
            })
            .catch((error)=>{
                alert(error);
            })

    }

    _postRequest(url){

        /*
            方式一：将 'key1=value&key2=value2' 封装成 FprmData 形式
        */
        let formData = new FormData();
        formData.append('username','lanou');
        formData.append('password','456');

        var opts = {
            method: 'POST',
            body: formData,
        }
        console.log(url);
        fetch(url,opts)
            .then((response) => {
                return response.text();
            })
            .then((responseData) => {

                alert(responseData)
            })
            .catch((error) => {

                alert(error)
            })

    }

    // 渲染视图
    render() {

        var url1 = "http://cache.video.iqiyi.com/jp/avlist/202861101/1/?callback=json";
        var url2 = "http://project.lanou3g.com/projects/bj/reactnative/login.php";

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this._getRequest.bind(this,url1)}
                >
                    <View style={styles.btn}>
                        <Text>Get请求</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._postRequest.bind(this,url2)}
                >
                    <View style={styles.btn}>
                        <Text>Post请求</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    container: {
        flex:1,
        marginTop:30,
        backgroundColor:'cyan',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    btn:{
        width: 60,
        height: 30,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'black',
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    }


});