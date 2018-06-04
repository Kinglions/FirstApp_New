/**
 * Created by frank on 2018/5/23.
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
    ListView,

} from 'react-native';


import PropTypes from 'prop-types'


/*

 ListView 数据列表
 最重要的是设置没放显示的组件
 section，header

 使用 ListView.DataSource，给它传递一个普通的数据数组，
 再使用 dataSource对象实例化一个 ListView 组件

 ListView 实现： row、section 组件定义、数据源设置

 设置数据源：
 将 dataSource 对象设置为 state 属性，ListView 会根据数据源进行渲染

*/


// 定义原始数据：数组
var contents = [

    'dataSource ListViewDataSource：ListView.DataSource实例（列表依赖的数据源）',
    'initialListSize number：指定在组件刚挂载的时候渲染多少行数据。用这个属性来确保首屏显示合适数量的数据，而不是花费太多帧逐步显示出来。',
    'onChangeVisibleRows function (visibleRows, changedRows) => void：当可见的行的集合变化的时候调用此回调函数。visibleRows 以 { sectionID: { rowID: true }}的格式包含了所有可见行，而changedRows 以{ sectionID: { rowID: true | false }}的格式包含了所有刚刚改变了可见性的行，其中如果值为true表示一个行变得可见，而为false表示行刚刚离开可视区域而变得不可见。',
    'onEndReached function：当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用。原生的滚动事件会被作为参数传递。译注：当第一次渲染时，如果数据不足一屏（比如初始值是空的），这个事件也会被触发，请自行做标记过滤。',
    'onEndReachedThreshold number：调用onEndReached之前的临界值，单位是像素',
    'pageSize number ：每次事件循环（每帧）渲染的行数。',
    'removeClippedSubviews bool ：用于提升大列表的滚动性能。需要给行容器添加样式overflow:\'hidden\'。（Android已默认添加此样式）。此属性默认开启',
    'renderFooter function：页头与页脚会在每次渲染过程中都重新渲染（如果提供了这些属性）。如果它们重绘的性能开销很大，把他们包装到一个StaticContainer或者其它恰当的结构中。页脚会永远在列表的最底部，而页头会在最顶部',
    'renderRow function ：(rowData, sectionID, rowID, highlightRow) => renderable\n' +
    '\n' +
    '从数据源(Data source)中接受一条数据，以及它和它所在section的ID。返回一个可渲染的组件来为这行数据进行渲染。默认情况下参数中的数据就是放进数据源中的数据本身，不过也可以提供一些转换器。\n' +
    '\n' +
    '如果某一行正在被高亮（通过调用highlightRow函数），ListView会得到相应的通知。当一行被高亮时，其两侧的分割线会被隐藏。行的高亮状态可以通过调用highlightRow(null)来重置',
    'renderScrollComponent function：指定一个函数，在其中返回一个可以滚动的组件。ListView将会在该组件内部进行渲染。默认情况下会返回一个包含指定属性的ScrollView',
    'renderSectionHeader function：(sectionData, sectionID) => renderable\n' +
    '\n' +
    '如果提供了此函数，会为每个小节(section)渲染一个粘性的标题。\n' +
    '\n' +
    '粘性是指当它刚出现时，会处在对应小节的内容顶部；继续下滑当它到达屏幕顶端的时候，它会停留在屏幕顶端，一直到对应的位置被下一个小节的标题占据为止。可以使用 stickySectionHeadersEnabled来决定是否启用其粘性特性。',
    'renderSeparator function：(sectionID, rowID, adjacentRowHighlighted) => renderable\n' +
    '\n' +
    '如果提供了此属性，一个可渲染的组件会被渲染在每一行下面，除了小节标题的前面的最后一行。在其上方的小节ID和行ID，以及邻近的行是否被高亮会作为参数传递进来',
    'scrollRenderAheadDistance number ：当一个行接近屏幕范围多少像素之内的时候，就开始渲染这一行。',
    'stickyHeaderIndices [number]：一个子视图下标的数组，用于决定哪些成员会在滚动之后固定在屏幕顶端。举个例子，传递stickyHeaderIndices={[0]}会让第一个成员固定在滚动视图顶端。这个属性不能和horizontal={true}一起使用',
    'stickySectionHeadersEnabled?: bool：设置小节标题(section header)是否具有粘性。粘性是指当它刚出现时，会处在对应小节的内容顶部；继续下滑当它到达屏幕顶端的时候，它会停留在屏幕顶端，一直到对应的位置被下一个小节的标题占据为止。注意此设置在水平模式（horizontal={true}）下无效。由于不同平台的设计原则不同，此选项在iOS上默认开启，andriod上默认关闭',
    'getMetrics() ：导出一些用于性能分析的数据',
    'scrollTo(...args) ：滚动到指定的x, y偏移处，可以指定是否加上过渡动画。',
    'scrollToEnd(options?) ：滚动到视图底部（水平方向的视图则滚动到最右边）。\n' +
    '\n' +
    '加上动画参数 scrollToEnd({animated: true})则启用平滑滚动动画，或是调用 scrollToEnd({animated: false})来立即跳转。如果不使用参数，则animated选项默认启用。',

];


// 创建 类
export default class ListViewDemo1 extends Component {

    // 构造
    constructor(props) {
        super(props);

        //  固定格式  -----------------------------
        //创建 dataSource 对象
        var datas = new ListView.DataSource({
        //    通过判断决定需要渲染那些行组件，避免全部渲染，提高渲染效率
           rowHasChanged:(oldRow,newRow) => oldRow!==newRow

        });

        // 初始状态
        this.state = {
            // 尽量不要直接使用 dataSource 对象进行赋值，使用 cloneWithRows 对数据源进行 复制 操作
            // 使用复制后的数据源实例化 listView，
            //
            // 优势：当原始数据 发生变化时，不影响 ListView 组件的 DataSource
            dataSource: datas.cloneWithRows(contents)
        };

        //  固定格式  -----------------------------

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


    // 渲染行方法
    _renderRow=(rowData: string)=>{
        return (
          <View style={styles.row}>
             <Text style={styles.content}>{rowData}</Text>
          </View>
        );
    };

    // 渲染视图
    render() {

        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            >

            </ListView>
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
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderWidth:1,
        borderColor:'red',
        margin:10,
    },
    content: {
        flex:1,
        fontSize: 16,
        color:'blue',
        lineHeight:30,
    }

});