/**
 * Created by frank on 2018/5/29.
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
    Image,
    SafeAreaView,

} from 'react-native';


import PropTypes from 'prop-types'
import Service from './../common/Service'
import Util from './../common/Util'
import Header from './../common/Header'
import Book_item from './Book_item'



// 创建 类
export default class Book_detail extends Component {

    /*配置  navigationOptions 属性（比如：标题）*/
    // static navigationOptions = ({navigation}) => {
    //
    //     return {
    //         headerTitle:navigation.getParam('title','详情'),
    //         tabBarVisible:false,
    //         title: "图书详情",
    //     }
    // };
    static navigationOptions = () => {

        return {
            tabBarVisible:false,
            title: "图书详情",
        }
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            bookData:null, // 图书对象详情信息
        };
    }


    // 属性检查
    static propTypes = {

        // bookID:PropTypes.number.isRequired,

    }




    /*组件加载完成时进行网络请求*/
    componentDidMount() {

        this._getData();

    }
    _getData(){
        var that = this; // 转接 this，防止 this 变化，对异步网络请求造成影响
        var url = Service.book_detail_id + this.props.navigation.getParam('bookID');

        console.log(url)

        Util.getRequest(url,(data)=>{

            console.log(data)
            that.setState({
                bookData: data,
            })
            this.props.navigation.setParams({'title':that.state.bookData.title});


        },(error)=>{
            alert(error)
        })

    }

    // 正常显示界面布局
    _renderView=()=>{
        return (
            <View>

                <Book_item book={this.state.bookData}/>
                <View>
                <Text style={styles.title}>图书简介</Text>
                <Text style={styles.text}>{this.state.bookData.summary}</Text>
                </View>
                <View style={{marginTop:10}}>
                <Text style={styles.title}>作者简介</Text>
                <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
                </View>
            </View>
        )
    };

    // 渲染视图
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.container}>
                    {
                        this.state.bookData?
                            this._renderView()
                            : Util.loading
                    }
                </ScrollView>
            </SafeAreaView>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'white',
    },
    title:{
        fontSize:16,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        fontWeight:'bold',
    },
    text:{
        marginLeft:10,
        marginRight:10,
        color:'#000D22',
    }

});