/**
 * Created by frank on 2018/5/18.
 */

/**
 * https://reactnative.cn/docs/0.51/view.html#content
 */

// 导入 RN 模块包组件
import React, { Component,PropTypes } from 'react';
import {

    Platform,
    StyleSheet,
    Text,
    View

} from 'react-native';

// 创建 类
export default class ViewTest extends Component {

    // 渲染视图
    render() {

        return (

            // 视图容器
            <View style={[styles.container,styles.center]}>

                <View style={styles.item}>
                    <View style={[styles.flex,styles.center]}>
                        <Text>酒店</Text>
                    </View>

                    <View style={[styles.flex,styles.lineLeftRight]}>
                        <View style={[styles.flex,styles.center,styles.lineCenter]}>
                            <Text>海外酒店</Text>
                        </View>
                        <View  style={[styles.flex,styles.center]}>
                            <Text>特价酒店</Text>
                        </View>
                    </View>

                    <View style={styles.flex}>
                        <View style={[styles.flex,styles.center,styles.lineCenter]}>
                            <Text>团购</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text>民宿.客栈</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    container: {
        marginTop:25,
        backgroundColor:'red',
        height:100
    },

    // 多个子组件需要设置
    flex: {
        flex:1
    },
    // 多个组件需要设置
    center: {
        justifyContent:"center",
        alignItems:"center"
    },
    item: {
        flexDirection:"row",
        backgroundColor:'green',
        marginTop:5,
        marginLeft:5,
        marginRight:5,
        height:80,
        borderRadius:5
    },
    // 给中间视图设置 左右边线
    lineLeftRight: {
        borderLeftWidth:1,
        borderRightWidth:1,
        borderColor:'white'
    },
    // 给上半区域设置下边线
    lineCenter: {
        borderBottomWidth:1,
        borderColor:'white'
    }

});