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
    SafeAreaView,
    FlatList,
    ActivityIndicator,
    Image,

} from 'react-native';

import PropTypes from 'prop-types'
import SearchBar from "../common/SearchBar";
import Util from '../common/Util'
import Service from '../common/Service'
import Movie_item from "./Movie_item";
import NoResultView from "../common/NoResultView";

// 创建 类
export default class Movies_list extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource:[], // 数据源
            show:false, // 是否显示加载页面
            refreshing:false, // 下拉刷新
            reloadMore:false, // 上拉加载
            showFootLoading:0, // 显示底部加载样式，0：隐藏，-1：没有更多数据，1：正在加载
            keywords:'哈利波特'
        };
    }

    static propTypes = {
        tip:PropTypes.number.isRequired,
        navigation:PropTypes.object.isRequired,

    }

    componentDidMount() {
        this._onRefresh();
    }
    /*数据请求*/
    getData(){


        var that = this;
        var url = Service.movie_search + 'count=10&q=' + this.state.keywords + '&start=' + this.state.dataSource.length.toString();

        if(this.props.tip === 1){
            url = Service.movie_playing + 'count=10&start=' + this.state.dataSource.length.toString();
        }else if(this.props.tip === 2){
            url = Service.movie_soon + 'count=10&start=' + this.state.dataSource.length.toString();
        }

        console.log(url)

        setTimeout(()=>{

            Util.getRequest(url,(data)=>{
                if(that.state.loadMore && !(data.subjects.length > 0)){
                    that.setState({
                        showFootLoading:-1,
                    })
                }else {
                    that.setState({
                        showFootLoading:0,
                    })
                }
                let d = that.state.loadMore ? [...that.state.dataSource,...data.subjects] : [...data.subjects];

                that.setState({
                    dataSource:d,
                    show:false,
                    refreshing:false,
                    loadMore:false,
                    loaded:true,

                },()=>{
                    if(that.state.dataSource.length === 0){
                        alert('没有找到相关数据');
                    }
                })
                console.log(that.state.dataSource)

            },(error)=>{

                that.setState({
                    show:false,
                    refreshing:false,
                    loadMore:false,
                    showFootLoading:0,
                    loaded:true,
                })
                alert(error);

            })

        },30)


    }
    /* 搜索框内容变化，修改关键词 */
    _onChangeText = (text) => {
        this.setState({
            keywords:text,
        })
    }
    /*搜索*/
    _searchPress = () => {
        this._onRefresh()
    }
    /*下来刷新*/
    _onRefresh = () => {

        this.setState({
            show:true,
            refreshing:true,
            loadMore:false,
            showFootLoading:0,
        },()=>{
            this.getData()
        })

    }
    /*上拉加载*/
    _onEndReached = () => {

        if(this.state.showFootLoading !== 0){
            return;
        }
        this.setState({
            show: false,
            refreshing: false,
            loadMore: true,
            showFootLoading: 1,
        },()=>{
            this.getData()
        })
    }

    _keyExtractor = (item,index) => (item.id + index);

    _renderItem = ({item,index}) => (

        <Movie_item movie={item} key={item.id} onPress={this._showDetail.bind(this,item)}/>
    )
    /*跳转详情页面*/
    _showDetail(movie){

        console.log(movie)

        this.props.navigation.push('Movie_detail',{
            title:movie.title,
            url:movie.alt,
        });
    }
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
                {
                    this.props.tip === 0 ? <SearchBar
                            onChangeText={this._onChangeText}
                            placeholder='请输入电影名称'
                            onPress={this._searchPress}
                        />
                        : <View></View>
                }
                {
                    this.state.loaded ?
                        <FlatList
                            data={this.state.dataSource}
                            renderItem = {this._renderItem}
                            keyExtractor = {this._keyExtractor}


                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                            onEndReached={this._onEndReached}
                            onEndReachedThreshold={0.5}
                            ListFooterComponent={this._ListFooterComponent}
                            ListEmptyComponent={this._ListEmptyComponent}
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
    footContainer:{
        flex:1,
        flexDirection:'row',
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },



});