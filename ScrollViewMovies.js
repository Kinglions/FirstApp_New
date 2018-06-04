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
    ScrollView,
    Image,


} from 'react-native';


import PropTypes from 'prop-types'

import * as moviesData from './DataSource'


// 从文件中导入数据,默认执行 JSON.parse() 方法，将 json格式字符串转化为 json 格式对象

var MovieList = moviesData.movies;


// 创建 类
export default class ScrollViewMovies extends Component {

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

        // 创建电影列表组件，根据 movies 中的元素个数，创建对应组件

        // http://cache.video.iqiyi.com/jp/avlist/202861101/1/?callback=jsonp9


        var moviewRows = [];

        // 遍历数组
        for (var i in MovieList) {

            // 获取 movie 对象
            var movie = MovieList[i];

            /*

            日期转换

            https://blog.csdn.net/yummry/article/details/79175496

            */

            var time = new Date(movie.publishTime).toLocaleDateString();



        //    创建组件显示视频信息：图像（movie.vpic）、名称（movie.vn）、标题（movie.vt）、上映时间（movie.publishTime）
            var row = (
                <View key={i} style={styles.container}>
                    <View style={styles.row}>
                        <Image
                            style={styles.thumbnail}
                            source={{uri:movie.vpic}}
                        />
                        <View style={styles.rightContainer}>
                            <Text style={styles.name}>{movie.vn}</Text>
                            <Text style={styles.title}>{movie.vt}</Text>
                            <Text style={styles.time}>上映时间：{time}</Text>
                        </View>

                    </View>
                    <View style={styles.bottomLine}></View>
                </View>
        );
            // 将创建的组件添加到数组中
            moviewRows.push(row);
        }



        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    {
                        // 根据数据源创建子组件
                        moviewRows
                    }
                </ScrollView>
            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    container: {
        flex:1,
    },
    scrollView:{
        flex:1,
        marginTop:25,
        backgroundColor:'white'
    },

    row:{
        flexDirection:'row',
        padding:5,
        alignItems:'center',
        backgroundColor:'#f5fcff',
    },
    thumbnail: {
        width:60,
        height:60,
        backgroundColor:'gray',
    },
    rightContainer: {
        marginLeft:10,
        flex:1,
    },
    name: {
        fontSize:18,
        marginTop:3,
        marginBottom:3,
        textAlign:'left',
        color:'#333333'
    },
    title:{
        fontSize:15,
        marginTop:3,
        marginBottom:3,
        textAlign:'left',
        color:'#666666'
    },
    time:{
        marginBottom:3,
        textAlign:'left',
        marginTop:3,
        color:'#666666'
    },
    bottomLine:{
        flex:1,
        backgroundColor:'#e5e5e5',
        height:0.5,
        marginBottom:0,
    }


});