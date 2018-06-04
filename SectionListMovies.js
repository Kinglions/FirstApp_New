/**
 * Created by frank on 2018/5/24.
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
    SectionList,

} from 'react-native';


import PropTypes from 'prop-types'
import * as MoviesData from './DataSource'

// 电影数据源列表
var moviesList = MoviesData.movies;


// 创建 类
export default class SectionListMovies extends Component {

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

    // 渲染行组件
    _renderItem = ({item,index,section}) => (

        <View style={styles.row} key={index+section}>
            <Image
                style={styles.image}
                source={{uri:item.vpic}}
            />
            <View style={styles.rightContent}>
                <Text style={styles.name}>{item.vn}</Text>
                <Text style={styles.otherText}>{item.vt}</Text>
                <Text style={styles.otherText}>上映时间：{new Date(item.publishTime).toLocaleDateString()}</Text>
            </View>
        </View>
    );

    // 渲染组头
    _renderSectionHeader=({section})=>(
        <View style={styles.header}>
            <Text style={styles.header_text} key={section.key}>{section.title}</Text>
            <View style={styles.sepLine}></View>
        </View>
    );

    // 配置 sections 数据源
    _sections = (
         [
            {'title':'海贼王1','key':'1',data:moviesList},
            {'title':'海贼王2','key':'2',data:moviesList},
            {'title':'海贼王3','key':'3',data:moviesList},
            {'title':'海贼王4','key':'4',data:moviesList},
            {'title':'海贼王5','key':'5',data:moviesList},
            {'title':'海贼王6','key':'6',data:moviesList}
        ]
    );
    _keyExtractor = (item,index,section) => String(section)+String(index);

    // 渲染 行与行之间的 分割线
    // 不会添加 第一行顶部 和 最后一行底部 的分割线
    _ItemSeparatorComponent = () => (
      <View style={styles.sepLine}></View>
    );

    //渲染头部组件的分割线
    // 会为 头部上下添加分割线
    _SectionSeparatorComponent = () => (

        <View style={styles.sepLine}></View>
    );

    // 渲染视图
    render() {

        return (
            <View style={styles.container}>
                <SectionList
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}
                    sections={this._sections}
                    keyExtractor={this._keyExtractor}
                    ItemSeparatorComponent={this._ItemSeparatorComponent}
                    SectionSeparatorComponent={this._SectionSeparatorComponent}

                />
            </View>
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
        backgroundColor:'red',
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