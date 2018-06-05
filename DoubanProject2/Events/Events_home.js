/**
 * Created by frank on 2018/6/5.
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
    Image,
    TouchableHighlight,

} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown'
import Popover from 'react-native-popover'

import PropTypes from 'prop-types'
import Service from "../common/Service";
import Util from "../common/Util";


// 创建 类
export default class Events_home extends Component {

    static navigationOptions = {
        headerTitle:'同城活动',
    }


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            cityList:[], // 城市名称列表
            cityLoc:{}, // 根据名称查找对应的城市 id

            isVisible: false,
            buttonRect: {},

        };
    }

    // 配置默认属性
    static defaultProps = {
        // name:'name',

    }

    // 属性检查
    // http://www.css88.com/react/docs/typechecking-with-proptypes.html
    static propTypes = {
        // name:PropTypes.string,
        // sex:PropTypes.number.isRequired,

    }

    /*获取城市列表*/
    _getLocList = () => {

        var url = Service.Event_city;

        var that = this;

        console.log(url)

        setTimeout(()=>{
            Util.getRequest(url,(data)=>{


                var locs = data.locs;

                if (!locs || locs.length === 0){

                    locs = [{name:'杭州',id:'118172'}];
                }

                var list = [];
                var locID = {};

                for (var index in locs){

                    var city = locs[index];

                    list.push(city['name']);
                    locID[city['name']] = city['id'];

                }
                that.setState({
                    cityList:list,
                    cityLoc:locID,
                },()=>{
                    console.log(that.state.cityList);
                    console.log(that.state.cityLoc);
                })

            },(error)=>{

                that.handleData(that,data.locs)
                alert(error)
            })
        },30)

    }
    /*处理数据*/
    handleData(that,data){

        var locs = data;

        if (!locs || locs.length === 0){

            locs = [{name:'杭州',id:'118172'}];
        }

        var list = [];
        var locID = {};

        for (var index in locs){

            var city = locs[index];

            list.push(city['name']);
            locID[city['name']] = city['id'];

        }
        that.setState({
            cityList:list,
            cityLoc:locID,
        },()=>{
            console.log(that.state.cityList);
            console.log(that.state.cityLoc);
        })
    }

    componentDidMount() {
        this._getLocList()
    }

    componentWillUnmount() {
        ModalDropdown.hide()
    }

    showPopover=()=> {
        this.refs.button.measure((ox, oy, width, height, px, py) => {
            this.setState({
                isVisible: true,
                buttonRect: {x: px, y: py, width: width, height: height}
            });
        });
    };

    closePopover=()=> {
        this.setState({isVisible: false});
    };

    // 渲染视图
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.dropdown}>
                    <TouchableHighlight ref='button' style={styles.button} onPress={this.showPopover}>
                        <Text style={styles.buttonText}>Press me</Text>
                    </TouchableHighlight>
                    <Popover
                        isVisible={this.state.isVisible}
                        fromRect={this.state.buttonRect}
                        onClose={this.closePopover}>
                        <Text>I'm the content of this popover!</Text>
                    </Popover>
                </View>
                <View style={styles.container}></View>
            </SafeAreaView>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    container: {
        flex:1,
    },
    dropdown:{
        height:44,
        width:60,
        margin:10,
    }

});