/**
 * Created by frank on 2018/6/4.
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
    ScrollView,
    Keyboard,

} from 'react-native';
import SwitchSelector from 'react-native-switch-selector'
import ScrollableTabView  from 'react-native-scrollable-tab-view';

import PropTypes from 'prop-types'
import Movies_list from "./Movies_list";


const options = [
    {label:'电影搜索',value:0},
    {label:'正在热映',value:1},
    {label:'即将上映',value:2},
];



// 创建 类
export default class Movie_Pages extends Component {

    static navigationOptions = ({navigation}) => {

        return {
            headerTitle:(<View style={styles.header}>
                <SwitchSelector
                    options={options}
                    initial={0}
                    onPress={navigation.getParam('onPressHeader')}
                />
            </View>),
        }
    }

    componentDidMount() {
    //    在 static 中使用 this 方法

        this.props.navigation.setParams({'onPressHeader':this._onPressHeader})
    }

    _onPressHeader=(value)=>{
        this.setState({
            page:value,
        })

        Keyboard.dismiss();
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            page:0,
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
    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }


    // 渲染视图
    render() {

        var moviesList = [];
        for (var i in options){

            var movie = (
                <Movies_list key={options[i].value} tip={options[i].value} navigation={this.props.navigation}/>
            )
            moviesList.push(movie)
        }

        return (
            <SafeAreaView style={{flex: 1}}>
                <ScrollableTabView page={this.state.page} locked={true} style={styles.container} renderTabBar={false}>
                    {moviesList}
                </ScrollableTabView>
            </SafeAreaView>
        );
    }
}

// 样式表
const styles = StyleSheet.create({

    container: {
        flex:1,
        flexDirection:'column',
    },
    header:{
        marginRight:30,
        marginLeft:30,
        height:40,
        flex:1,
    }

});