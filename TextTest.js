/**
 * Created by frank on 2018/5/18.
 */

/**
 * https://reactnative.cn/docs/0.51/getting-started.html
 */

// 导入 RN 模块包组件
import React, { Component,PropTypes } from 'react';
import {

    Platform,
    StyleSheet,
    Text,
    View

} from 'react-native';

// 单独拆除为 子组件
class HeaderText extends Component {

    render() {
        return (

            <View style={styles.HeaderFlex}>
                <Text style={styles.HeaderFont}>
                    <Text style={styles.header_font_1}>网易</Text>
                    <Text style={styles.header_font_2}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        );
    }

}

class  FooterText extends Component {


    show(title) {
        alert(title);
    }

    render(){

        // 定义数组,用于存储设置好的 Text 组件
        var newsComponents = [];
        // 遍历存储信息的数组,从外部存入
        for (var i in this.props.news) {

            var text = (
                <Text numberOfLines={0} key={i} style={styles.footer_news_item}
                      onPress={this.show.bind(this,this.props.news[i])}
                >
                    {this.props.news[i]}
                </Text>
            );

            // 将设置好的 Text 存入数组中
            newsComponents.push(text);
        }

        return (

            <View style={styles.footerFlex}>
                <Text style={styles.foot_news_title}>今日要闻</Text>
                {newsComponents}
            </View>
        );
    }
}


// 创建 类
export default class TextTest extends Component {

    // 渲染视图
    render() {

        var titles = [
            "使用Flexbox布局",
            "使用flexDirection、alignItems和 justifyContent三个样式属性就已经能满足大多数布局需求",
            "在组件的style中指定flexDirection可以决定布局的主轴",
            "在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式",
            "在组件的style中指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式",
            ];
        return (
            <View style={styles.flex}>

                <HeaderText/>
                <FooterText news={titles}/>

            </View>
        );
    }
}


// 样式表
const styles = StyleSheet.create({

    flex: {
        flex:1,

    },

    HeaderFlex:{

        marginTop:25,
        height:40,
        borderBottomWidth:1,
        borderBottomColor:"#e5e5e5",
        justifyContent:'center',
        backgroundColor:'yellow',

    },
    // 字体设置的公共部分
    HeaderFont: {
        fontSize:25,
        fontWeight:'bold',
        textAlign:"center"
    },

    header_font_1:{
        color:"red"
    },
    header_font_2:{
        color:'white',
        backgroundColor:'red'
    },

    footerFlex: {
      flex:1,
    },

    // 今日要闻标题
    foot_news_title:{
        fontSize:20,
        fontWeight:'bold',
        color:"red",
        marginLeft:10,
        marginTop:15
    },
    // 每条新闻
    footer_news_item:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        lineHeight:30
    }


});