/**
 * Created by frank on 2018/5/23.
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
    ListView,
    Image,

} from 'react-native';


import PropTypes from 'prop-types'

import * as MoviesData from './DataSource'


// 电影数据源列表
var moviesList = MoviesData.movies;


// 创建 类
export default class ListViewMovies extends Component {

    // 构造
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged:(oldRow,newRow) => oldRow !== newRow,
        });


        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(moviesList),
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


    // 渲染行 方法
    _renderRow=(movie)=>{

        // 转换时间
        var time = new Date(movie.publishTime).toLocaleDateString();

        // 电影每行视图
        return (

            <View style={styles.row}>
                <Image
                    style={styles.image}
                    source={{uri:movie.vpic}}
                />
                <View style={styles.rightContent}>
                    <Text style={styles.name}>{movie.vn}</Text>
                    <Text style={styles.otherText}>{movie.vt}</Text>
                    <Text style={styles.otherText}>上映时间：{time}</Text>
                </View>
            </View>
        )

    };

    // 渲染头部
    _renderHeader=()=>{
        return (
            <View style={styles.header}>
                <Text style={styles.header_text}>海贼王剧集</Text>
                <View style={styles.sepLine}></View>
            </View>
        );
    };

    // 渲染分割线
    _renderSeparator=(sectionID:number, rowID:number)=>{
        return (
            <View style={styles.sepLine} key={sectionID+rowID}></View>
        );
    };

    // 渲染视图
    render() {

        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                initialListSize={10}
                renderRow={this._renderRow}
                renderHeader={this._renderHeader}
                renderSeparator={this._renderSeparator}

            >

            </ListView>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    container: {
        flex:1,
        marginTop:25,
    },
    row:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#f5fcff',
    },
    rightContent:{
        flex:1,
        margin:5,
    },
    name:{
        color:'#333333',
        fontSize:16,
        flex:1,
        marginTop:3,
        marginBottom:3,
    },
    image:{
        height:60,
        width:60,
        backgroundColor:'gray'
    },
    otherText:{
        color:'#666666',
        fontSize:15,
        marginTop:3,
        marginBottom:3,
    },
    sepLine:{
        height:0.5,
        backgroundColor:'#e5e5e5',
    },

//    header 组件样式
    header:{
        flex:1,
        height:44,
        backgroundColor:'#f5fcff',
    },
    header_text:{
        flex:1,
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:44,
    },


});