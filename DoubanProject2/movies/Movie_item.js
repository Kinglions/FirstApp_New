/**
 * Created by frank on 2018/6/1.
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
    Image,
    TouchableOpacity,

} from 'react-native';


import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'

// 创建 类
export default class Movie_item extends Component {

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
    // http://www.css88.com/react/docs/typechecking-with-proptypes.html
    static propTypes = {
        movie:PropTypes.object.isRequired,
    }


    // 渲染视图
    render() {

        var movie = this.props.movie;
        /*提取演员名字*/
        var actors = [];

        for (var i in movie.casts){
            actors.push(movie.casts[i].name);
        }

        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{uri:movie.images.medium}}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>名称：{movie.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>演员：{actors}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>评分：{movie.rating.average}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>时间：{movie.year}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>标签：{movie.genres}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    item: {
        flexDirection:'row',
        height:120,
        padding:10,
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width:80,
        height:100,
    },
    contentContainer:{
        flex:1,
        marginLeft:15,
    },
    textContainer:{
        flex:1,
        justifyContent:'center',
    },
    text:{
        color:'black',
    }



});