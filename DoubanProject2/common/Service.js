/**
 * Created by frank on 2018/5/28.
 */

/**
 * https://reactnative.cn/docs/0.51/getting-started.html
 */


/*

接口 API 配置

https://developers.douban.com/wiki/?title=movie_v2

*/


var BaseURL = 'https://api.douban.com/v2/';

export default Douban_APIS = {

    /*
    搜索图书
    GET

    q	查询关键字	q和tag必传其一
    tag	查询的tag	q和tag必传其一
    start	取结果的offset	默认为0
    count	取结果的条数	默认为20，最大为100
    */
    book_search: BaseURL + 'book/search?',

    /*
    获取图书信息
    GET  https://api.douban.com/v2/book/:id
    */
    book_detail_id: BaseURL + 'book/',

    /*
    搜索电影
    */
    movie_search: BaseURL + 'movie/search?',

    movie_playing: BaseURL + 'movie/in_theaters?',

    movie_soon: BaseURL + 'movie/coming_soon?',

    /*获取城市列表*/
    Event_city: BaseURL + 'loc/list',

    /*获取城市列表

    loc	城市 id
    day_type	时间类型	future, week, weekend, today, tomorrow
    type	活动类型	all,music, film, drama, commonweal, salon, exhibition, party, sports, travel, others

    */
    Event_list: BaseURL + 'event/list?',

}