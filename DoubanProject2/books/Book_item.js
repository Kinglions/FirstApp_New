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

} from 'react-native';

import PropTypes from 'prop-types'


import Util from './../common/Util'



/*
book 图书对象
onPress 时间处理方法：
    通过 ...this.props 绑定，需要设置参数，图书id

    需要使用字段：

        image 图书缩略图
        title 图书名称
        publisher 出版社
        author 作者
        pages 图书总页数
        price 价格

*/

// 创建 类
export default class Book_item extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    // 配置默认属性
    static defaultProps = {
        book:null,

    }

    // 渲染视图
    render() {

        var book = this.props.book;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.item} {...this.props}>
                    {/*图书图片*/}
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{uri:book.image}}/>
                    </View>
                    {/*图书信息*/}
                    <View style={styles.contentContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title} numberOfLines={1}>{book.title}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.publisher_author} numberOfLines={1}>{book.publisher}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.publisher_author} numberOfLines={1}>{book.author}</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price} numberOfLines={1}>{book.price}</Text>
                            <Text style={styles.pages} numberOfLines={1}>{book.pages}页</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {Util.sepLine}
            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white',
    },
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
    textContainer: {
        flex:1,
        justifyContent:'center',
    },
    publisher_author: {
        color:'#A3A3A3',
        fontSize:13,
    },
    priceContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    price:{
        color:'#2bb2a3',
        fontSize:16,
    },
    pages:{
        marginLeft:10,
        color:'#a7a0a0',
    },


});