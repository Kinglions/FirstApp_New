/**
 * Frank React Native App
 * https://github.com/facebook/react-native
 * Frank
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    SectionList,
    Image,


} from 'react-native';

import PropTypes from 'prop-types';




/*

展示电影列表

逻辑：
未获取数据时，显示等待页面，获取数据时，展示数据

需要给 state 添加一个属性，用于标记下载状态

*/






type Props = {};
export default class FetchTest2 extends Component<Props> {


    // 初始化方法
    constructor(props) {
        super(props);
        this.state = {
            //    配置组件 state

            loaded: false, // 数据是否下载成功的标志
            dataSource:[], // 数据源

            refreshing:false,

            page:0,
        };
    }


    // 组件挂载完成方法
    componentDidMount() {
        // loadingView 挂载完成开始加载数据

        this._onRefreshData();
    }


    _onRefreshData=()=>{



        console.log('下拉刷新');

        this.setState({
            dataSource:[],
            refreshing:true,
            loaded:false,
            page:0,

        })

        this.loadingDataMethod()

    }
    _onEndReachedData=()=>{
        console.log('加载更多');

        this.setState({
            refreshing:false,
            loaded:true,
            page:this.state.dataSource.length,

    })
        this.loadingDataMethod()
    }

    loadingDataMethod(){


        // page=0;
        alert(this.state.page)

        var url = 'https://api.douban.com/v2/book/search?q=reactnative&count=10&start=' + this.state.page.toString();
        console.log(url);

        setTimeout(()=>{

            this._get(url,(data)=>{


                if(data.length === 0 || !data){
                    return;
                }

                this.setState({
                    dataSource:[...this.state.dataSource,...data],
                    refreshing:false,
                    loaded:true,
                })
                console.log(this.state.dataSource)
                alert(this.state.dataSource)

            });
        },30);

    }



    // get 方法
    _get(url,successBack){

        var opts = {
            method:'GET'
        };

        fetch(url,opts)
            .then((response)=>{

                return response.json();
            })
            .then((responseData)=>{

                successBack(responseData.books)
            })
            .catch((error)=>{
                alert(error);
            })



    }

    // post 方法
    _post(url,params){


        let formData = new FormData();

        var keys = Object.keys(params);

        keys.map((key,index)=>{

            formData.append(key,params[key]);

        });


        var opts = {
            method:'POST',

            body:formData,
        };

        fetch(url,opts)
            .then((response)=>{

                return response.json();
            })
            .then((responseData)=>{

                // 刷新数据，重新渲染组件，展示 listView，得到数据更新 dataSource
                this.setState({
                    loaded: true,
                    dataSource:responseData.result.data,

                });
                console.log(responseData.result.data);

            })
            .catch((error)=>{
                alert(error)
            })

    }

    // 配置网络加载页面
    renderLoadingView() {

        return(
            <View style={styles.container}>
                <Text style={styles.loadingText}>Loading Movies......</Text>
            </View>
        )
    }

    /*
    {
            "uniquekey":"f05832c69804a42173e5bef03da73e02",
            "title":"救起西湖溺水男孩的英雄来自玉环救援队 他还有很多话想说",
            "date":"2018-05-27 09:51",
            "category":"社会",
            "author_name":"浙江在线",
            "url":"http://mini.eastday.com/mobile/180527095149375.html",
            "thumbnail_pic_s":"http://08.imgmini.eastday.com/mobile/20180527/20180527095149_9f936860a959064937366c1dac446380_3_mwpm_03200403.jpg",

    }


    */
    // 渲染列表行
    _renderItem=({item,index})=>(
        <View style={styles.bigContainer}>
            <View
                // key={item.uniquekey}
                style={styles.rowContainer}
            >
                <Image
                    style={styles.thumbImg}
                    source={{uri:item.image}}
                />
                <View
                    style={styles.rightContainer}
                >
                    <View
                        style={styles.titleContainer}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View
                        style={styles.dateContainer}
                    >
                        <Text style={styles.auth}>{item.author}</Text>
                        <Text style={styles.date}>{item.pubdate}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.sepLine}></View>
        </View>
    );
    // 配置唯一标示 key
    _keyExtractor = (item,index)=> item.id;

    render() {

        // 如果未请求到数据，提示'等待加载'页面
        // if (!this.state.loaded){
        //
        //     return this.renderLoadingView();
        // }



        return (
            <FlatList
                style={styles.flatContainer}
                data={this.state.dataSource}
                renderItem={this._renderItem}
                keyExtractor = {this._keyExtractor}

                refreshing={this.state.refreshing}
                onRefresh={this._onRefreshData}

                // onEndReached={this._onEndReachedData}
                // onEndReachedThreshold={0.1}
            />
        );
    }
}



const styles = StyleSheet.create({

    // loading 样式
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:25,


    },
    loadingText:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:"center",
        marginLeft:10,
        marginRight:10,
    },

    // list Row
    bigContainer:{
        flex:1,
    },
    sepLine:{
        flex:1,
        height:0.5,
        backgroundColor:'#e5e5e5',
    },
    flatContainer:{

        flex:1,
        backgroundColor: 'white',

    },
    rowContainer:{

        flex:1,
        flexDirection:'row',
        // padding:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    thumbImg:{
        width:100,
        height:70,
        margin:15,
        backgroundColor:'gray',
    },
    rightContainer:{
        flex:1,
        marginTop:15,
        marginRight:15,
        marginBottom:15,
    },
    titleContainer:{
        flex:1,
        flexDirection:'row',
    },
    categView:{
        borderWidth:1,
        borderRadius:3,
        borderColor:'red',
        backgroundColor:'red',
        width:30,
        height:15,
        justifyContent:'center',
        alignItems:'center',
    },
    category:{
        flex:1,
        width:30,
        height:15,
        fontSize:10,
        padding:1,
        color:'white',
        textAlign:'center',
        // marginTop:3,
    },
    title:{
        flex:1,
        fontSize:16,
        fontWeight:'bold',
        // lineHeight:20,
        color:'#333333',
        paddingLeft:3,
    },
    dateContainer:{
        marginTop:5,
        flexDirection:'row',
    },
    auth:{
        fontSize:12,
        color:'blue',
        lineHeight:15,
        flex:1,
        textAlign:'left',
    },
    date:{
        fontSize:12,
        color:'#666666',
        lineHeight:15,
        flex:1,
        textAlign:'right',
    },



});