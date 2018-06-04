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
    Image,
    ScrollView,
    SectionList,
    FlatList,
    RefreshControl,
    ActivityIndicator,
    SafeAreaView,

} from 'react-native';

import {createStackNavigator} from 'react-navigation'

import PropTypes from 'prop-types'

import SearchBar from './../common/SearchBar'
import Util from './../common/Util'
import Service from './../common/Service'
import Book_item from './Book_item'
import NoResultView from "../common/NoResultView";

/*

图书列表模块：
    搜索栏、图书列表

图书列表内容：
    通过调用图书搜索接口获取多条图书数据

图书列表 Item 单独封装

*/


var dataS = [];
// let pageNo = 0;//当前第几页
// var showFoot = 0; // 控制foot， 0：隐藏footer  -1：已加载完成,没有更多数据   1 ：显示加载中

// 创建 类
export default class Book_list extends Component {



    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            /*数据源*/
            dataSource:[],

            /*网络请求状态标识*/
            show:false,

            /*搜索关键词*/
            /*作用：1、搜索接口需要，2、点击搜索按钮时，修改关键词内容，重新请求数据，重新渲染*/
            keywords:'ReactNative',

            refreshing:true, // 是否需要刷新
            loadMore:false, // 是否需要加载更多

            showFootLoading:0, // 控制foot， 0：隐藏footer  -1：已加载完成,没有更多数据   1 ：显示加载中
        };
    }

    static navigationOptions = {
        headerTitle:'图书',
    }



    /* textInput 的onChangeText 事件处理方法 */
    _changeText=(text)=>{


        console.log(text)
        this.setState({
            keywords:text,
        })
    }

    /* 点击搜索触发的事件 */
    _searchPress=()=>{

        this._onRefresh();
    }


    /* 网络请求，获取数据*/
    _getData(){



        /*请求数据*/
        var that = this;

        console.log(that.state.dataSource);

        console.log(that.state.loadMore);

        var url = Service.book_search + 'count=10&q=' + this.state.keywords + '&start=' + that.state.dataSource.length.toString()

        setTimeout(()=>{

            Util.getRequest(url,(data)=>{ /*请求成功回调*/

                console.log(data);

                /*没有相关数据，直接提示*/
                if (!data.books || data.books.length === 0){

                    that.setState({
                        showFootLoading:-1,
                        loaded:true,
                    });
                }

                /*处理上拉加载和下拉刷新数据源*/
                let books = that.state.loadMore ? [...that.state.dataSource,...data.books] : [...data.books];


                /*设置下载状态和数据源*/
                that.setState({

                    dataSource:books,
                    loadMore:false,
                    showFootLoading:0,
                    refreshing:false,
                    show:true,
                    loaded:true,

                })


            },(error)=>{
                that.setState({

                    loadMore:false,
                    refreshing:false,
                    show:true,
                    loaded:true,
                    showFootLoading:0,

                },()=>{
                    alert(error);
                })

            });

        },30);

    };

    /* 页面加载成功时发起网络请求 */
    componentDidMount() {

        this._onRefresh();
    }

    /*渲染列表组件*/
    _renderItem=({item,index})=>(
        <Book_item
            key={item.book_id}
            book={item}
            onPress={this._showDetail.bind(this,item.id)}
        />
    );


    /*跳转详情页面*/
    _showDetail(bookid){

        console.log(bookid)

        this.props.navigation.push('Detail',{bookID:bookid});
    }

    //刷新方法
    _onRefresh=()=>{
        console.log('刷新');

        this.setState({
            loadMore:false,
            refreshing:true,
            show:false,
            showFootLoading:0,

        },()=>{

            this._getData();
        });

    };

    // 上拉加载更多请求
    _onEndReached=()=>{

        if(this.state.showFoot !== 0 ){

            return;
        }
        console.log('加载');

        this.setState({
            refreshing:false,
            show:true,
            loadMore:true,
            showFootLoading: 1,

        },()=>{ // 状态更新完毕回调方法

            console.log(this.state.loadMore)
            //底部显示正在加载更多数据
            //获取数据
            this._getData();

        });

    };



    _ListFooterComponent = () => {

        if (this.state.showFootLoading === 0) { // 隐藏

            return (
                <View></View>
            )
        }else if(this.state.showFootLoading === 1){ // 正在加载

            return (
                <View style={styles.footContainer}>
                    <ActivityIndicator/>
                    <Text>正在加载中...</Text>
                </View>
            )
        }else { // 没有更多啦

            return (
                <View style={styles.footContainer}>
                    <Text>没有更多啦</Text>
                </View>
            )
        }
    };
    _ListEmptyComponent = () => {

        return (
            <NoResultView title="暂无数据"/>
        )
    }



    // 渲染视图
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <SearchBar
                    placeholder='请输入图书的名称'
                    onPress={this._searchPress}
                    onChangeText={this._changeText}
                />
                {
                    // 请求数据时：显示 loadingView，成功之后显示 SectionView
                    this.state.loaded ?
                        <FlatList
                            renderItem={this._renderItem}
                            data = {this.state.dataSource}
                            keyExtractor={(item,index)=>index.toString()}
                            ListFooterComponent={this._ListFooterComponent}
                            ListEmptyComponent={this._ListEmptyComponent}

                            initialNumToRender={10}

                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh} // 下拉刷新

                            onEndReached={this._onEndReached} // 上拉加载
                            onEndReachedThreshold={0.1}


                        />
                        : Util.loading
                }
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
    footer:{
        flexDirection:'row',
        height:24,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },


});