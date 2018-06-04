/**
 * Created by frank on 2018/5/21.
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

} from 'react-native';


import PropTypes from 'prop-types'


// 创建 类
export default class ImageTest extends Component {

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


    // resizeMode enum('cover', 'contain', 'stretch', 'repeat', 'center')
    /*

     resizeMode enum('cover', 'contain', 'stretch', 'repeat', 'center')

     决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小。

    cover: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。译注：这样图片完全覆盖甚至超出容器，容器中不留任何空白。

    contain: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。译注：这样图片完全被包裹在容器中，容器中可能留有空白

    stretch: 拉伸图片且不维持宽高比，直到宽高都刚好填满容器。

    repeat: 重复平铺图片直到填满容器。图片会维持原始尺寸。仅iOS可用。

    center: 居中不拉伸。
    * */



    // source {uri: string}, number

    /*
    uri是一个表示图片的资源标识的字符串，它可以是一个http地址或是一个本地文件路径（使用require(相对路径)来引用）。

    目前原生支持的图片格式有png、jpg、jpeg、bmp、gif、webp （限Android）、psd （限iOS）。当然你可以在github上找一些第三方组件来扩充支持的格式。

    * */

    /*
    *
    * 本地资源
    *  <Image
            style={styles.img}
            source={require('./1.png')}
            resizeMode={'center'}
        />

        网络资源【必须要设置图片大小，否则无法显示】
        <Image
            style={styles.img}
            source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
            resizeMode={'center'}
        />
    * */

    // 渲染视图
    render() {

        return (
            <View>
                <Image
                    style={styles.img}
                    source={require('./1.png')}
                    resizeMode={'center'}
                />

                <Image
                    style={styles.img}
                    source={{uri: 'http://avatar.csdn.net/1/1/E/1_fengyuzhengfan.jpg'}}
                    resizeMode={'center'}

                />


            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    img: {
        width:500,
        height:100,
        borderWidth:1,
    },

});