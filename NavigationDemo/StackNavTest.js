/**
 * Created by frank on 2018/5/25.
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

import {

    createStackNavigator,
    createBottomTabNavigator,

} from 'react-navigation'

import { YellowBox } from 'react-native';
import PropTypes from 'prop-types'

// 消除警告
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// 创建 类
class HomePage extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    /*配置  navigationOptions 属性（比如：标题）*/

    static navigationOptions = {

        title:'首页', /*填写静态标题名称*/


        // 导航栏设置方式一：可以单独配置导航栏样式，也可以直接在路由中进行统一配置【方式一优先级高于方式二】
        /*
        headerStyle:{
            backgroundColor:'red',
        },
        headerTintColor: 'blue',
        headerTitleStyle:{
            fontWeight:'bold',
            color:'white',
            fontSize:18,
        }


        // headerTitle instead of title【用于自定义导航栏标题组件】
           headerTitle: <自定义组件 />,

        */
    };

    _pressPush = () => {

        /* 进入进入指定页面 */
        // this.props.navigation.navigate('Next');

        /* push 到下一页面

        参数说明：

        参数一：表示配置的下级页面路由的 key名称
        参数二：表示需要传入到下级页面的 参数

        */
        this.props.navigation.push('Next',{
            msg:'我是从 home 页面进来的',
            title:'我是上级指定的标题',
        });
    };

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>欢迎来到 homePage 页面</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this._pressPush}
                >
                    <Text style={styles.btn_text}>点击进入 next 页面</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


// 创建 类
class NextPage extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    /*配置  navigationOptions 属性（比如：标题）*/
    static navigationOptions = ({navigation}) => {

        return {
            title:navigation.getParam('title','placeHold title'),

            tabBarVisible:false,

            headerRight:(
                <TouchableOpacity
                    style={styles.right_TopBtn}
                    onPress={()=> navigation.navigate('DetailModel')}
                >
                    <Text style={styles.btn_text}>按钮</Text>
                </TouchableOpacity>
            )

            // 导航栏设置方式一： 可以单独配置导航栏样式，也可以直接在路由中进行统一配置【方式一优先级高于方式二】
            /*
            headerStyle:{
                backgroundColor:'red',
            },
            headerTintColor: 'blue',
            headerTitleStyle:{
                fontWeight:'bold',
                color:'white',
                fontSize:18,

            }

           // headerTitle instead of title【用于自定义导航栏标题组件】
           headerTitle: <自定义组件 />,

            */
        }
    };

    _pressPop = () => {

        /*直接返回 上级页面 页面*/
        this.props.navigation.goBack();

        /*返回到根视图*/
        // this.props.navigation.popToTop('home');

    };

    /*
    修改标题按钮绑定事件
    */
    _pressChangeTitle = () => {

        /*直接返回 上级页面 页面*/
        this.props.navigation.setParams({'title':'next'});

        /*返回到根视图*/
        // this.props.navigation.popToTop('home');

    };

    /*渲染视图*/
    render() {

        return (
            <View style={styles.container}>

                <Text style={styles.text}>{this.props.navigation.getParam('msg','')}</Text>
                <Text style={styles.text}>欢迎来到 nextPage 页面</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this._pressPop}
                >
                    <Text style={styles.btn_text}>点击回到 home 页面</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this._pressChangeTitle}
                >
                    <Text style={styles.btn_text}>修改标题为：next</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


class DetailScreen extends Component{


    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}>这是一个模态视图：modal </Text>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Text style={styles.btn_text}>退出</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

/*

配置导航路由：

initialRouteName：设置根视图路由

*/
const MainStack = createStackNavigator(

    {
        Home:HomePage, // 配置路由方式一：
        Next:{
            screen:NextPage, // 配置路由方式二：
        }
    },{
        initialRouteName:'Home', // 设置默认路由

        /*
        导航栏设置方式二：【方式一优先级高于方式二】
        在路由中统一配置导航栏样式
        */
        navigationOptions:{

            headerStyle:{
                backgroundColor:'red',
            },
            headerTintColor: 'blue',
            headerTitleStyle:{
                fontWeight:'bold',
                color:'white',
                fontSize:18,
            }
        }
    }

);

/*

配置导航路由：

mode：设置视图进入模式【modal 表示表态效果】

*/
const RootStack = createStackNavigator(

    {
        Main:MainStack,
        DetailModel:DetailScreen,
    },{

        /*

        mode堆栈导航器的配置可以是card（默认）或modal。该modal行为幻灯片从iOS上底部的屏幕，
        并允许用户从顶部向下滑动来关闭它。
        该modal配置对Android没有影响，因为全屏幕模式在平台上没有任何不同的转换行为

        */
        mode: 'modal',
        headerMode: 'none',
    }
);

const TabBarNav = createBottomTabNavigator({

    Home:{
        screen:RootStack,
        navigationOptions:({navigation}) => ({
            tabBarLabel: '识兔',
            tabBarIcon: ({focused}) => {

                var iconName = focused ? require('./1.png') : require('./2.png');
                return <Image
                    source={iconName}
                    style={styles.img}
                />
            },
        }),
    },
    Sec:{
        screen:RootStack,
        navigationOptions:({navigation}) => ({
            tabBarLabel: '识兔1',
            tabBarIcon: ({focused,tintColor}) => {

                const {routeName} = navigation.state;
                var iconName = focused ? require('./1.png') : require('./2.png');
                return <Image
                    source={iconName}
                    style={styles.img}
                />
            },
        }),
    },
    Thir:{
        screen:RootStack,
        navigationOptions:({navigation}) => ({

            tabBarLabel: '识兔2',
            tabBarIcon: ({focused,tintColor}) => {

                const {routeName} = navigation.state;
                var iconName = focused ? require('./1.png') : require('./2.png');
                return <Image
                    source={iconName}
                    style={styles.img}
                />
            },

        }),

    },

},
//     {
//
//     initialRouteName:'Home', // 设置默认路由
//     navigationOptions:({navigation}) => ({
//
//
//         tabBarIcon:({focused, tintColor}) => {
//
//             const {routeName} = navigation.state;
//
//             var iconName;
//             if (routeName === 'Home'){
//                 title = 'home123';
//                 iconName = focused ? require('./1.png') : require('./2.png');
//             } else if(routeName === 'Sec'){
//                 title = 'home123';
//                 iconName = focused ? require('./1.png') : require('./2.png');
//             }else {
//                 title = 'home123';
//                 iconName = focused ? require('./1.png') : require('./2.png');
//             }
//
//             return <Image
//                 style={styles.img}
//                 source={iconName}
//             />
//         }
//     }),
//     tabBarOptions: {
//
//         activeTintColor: 'red',
//         inactiveTintColor:'blue',
//         labelStyle: {
//             fontSize: 12,
//         },
//         style: {
//             // backgroundColor: 'blue',
//         },
//
//     }
// }
);

export default class StackNavTest extends Component {


    // 渲染视图
    render() {

        return (
            <TabBarNav/>
        );
    }
}


// 样式表
const styles = StyleSheet.create({

    img:{

        flex:1,
        // height:40,
        width:30,
        margin:3,
    },
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        marginLeft:30,
        marginRight:30,marginBottom:20,
        textAlign:'center',
        color:'red',
    },
    btn:{
        width:200,
        height:30,
        backgroundColor:'green',
        borderRadius:15,
        flexDirection:'column',
        justifyContent:'center',
        marginTop:20,

    },
    btn_text:{
        textAlign:'center',
    },
    right_TopBtn:{
        width:40,
        height:40,
        marginRight:5,
        backgroundColor:'green',
        flexDirection:'column',
        justifyContent:'center',

    },

});