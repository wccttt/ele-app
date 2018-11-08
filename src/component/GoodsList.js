import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import './GoodsList.less';
let goodsListData=[
    {
        id:1,
        title:'',
    }
];
 class GoodsList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {/*商品详细信息*/}
                <div  className='GoodsList_container'>
                    <div className="GoodsList_info">
                        <div className='GoodsList_Image'>
                            <img src="https://fuss10.elemecdn.com/a/b3/259e1b77a1d4896f20f584087a9c4jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt=""/>
                        </div>
                        <div className="GoodsList_main">
                            <div className="GoodsList_line1">
                                <i>品牌</i>
                                <span className='GoodsList-title'>
            真功夫(北京搜秀店)

        </span>

                            </div>


                            <div className='GoodsList_line2'>
                                <div className="GoodsList_inner">
                                    <img className='GoodsList_logo' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt=""/>
                                    &nbsp;<span className='GoodsList_rate'>4.8</span>&nbsp;&nbsp;
                                    <span>月售2036单</span>
                                    <span className='special_give'>蜂鸟转送</span>
                                </div>
                            </div>

                            <div className="GoodsList_line3 clearfix">
                                <span className='GoodsList_start'>￥5起送</span>&nbsp;
                                |&nbsp;<span>
                配送费￥6
            </span>
                                <div className='GoodsList_time_distance'>
                                    <span>2.26km</span>&nbsp;|&nbsp;
                                    <span>47分钟</span>

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="activeWrapper">
                        <div className='index_targetLine'>
                            <i className='iconfont icon-icon_found_koubei'>

                            </i>
                            <span>口碑人气好店</span>
                        </div>

                        <div className="activeInner">
                            <div className="indexActive">
                                <span className='indexActive_icon'>首</span>
                                <span>新用户下单立减17元</span>
                            </div>
                            <div className="indexSale">
                                <span className='indexSale_icon'>减</span>
                                <span>满30减12，满60减24</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【立减17.5元】蛋蛋鸡腿肉饮料套餐</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【立减39.5元】蛋蛋超值双人套餐</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【立减14.88元】双拼豪华单人汤餐</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【五折】酸豆角双拼豪华餐</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【立减17.8元】棒棒哒酸豆角汤餐</span>
                            </div>
                            <div className="GoodsList_button">
                                <span>七个活动</span>
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt=""/>
                            </div>

                        </div>

                    </div>
                </div>
                <div  className='GoodsList_container'>
                    <div className="GoodsList_info">
                        <div className='GoodsList_Image'>
                            <img src="https://fuss10.elemecdn.com/a/b3/259e1b77a1d4896f20f584087a9c4jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt=""/>
                        </div>
                        <div className="GoodsList_main">
                            <div className="GoodsList_line1">
                                <i>品牌</i>
                                <span className='GoodsList-title'>
            真功夫(北京搜秀店)

        </span>

                            </div>


                            <div className='GoodsList_line2'>
                                <div className="GoodsList_inner">
                                    <img className='GoodsList_logo' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt=""/>
                                    &nbsp;<span className='GoodsList_rate'>4.8</span>&nbsp;&nbsp;
                                    <span>月售2036单</span>
                                    <span className='special_give'>蜂鸟转送</span>
                                </div>
                            </div>

                            <div className="GoodsList_line3 clearfix">
                                <span className='GoodsList_start'>￥5起送</span>&nbsp;
                                |&nbsp;<span>
                配送费￥6
            </span>
                                <div className='GoodsList_time_distance'>
                                    <span>2.26km</span>&nbsp;|&nbsp;
                                    <span>47分钟</span>

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="activeWrapper">
                        <div className='index_targetLine'>
                            <i className='iconfont icon-icon_found_koubei'>

                            </i>
                            <span>口碑人气好店</span>
                        </div>

                        <div className="activeInner">
                            <div className="indexActive">
                                <span className='indexActive_icon'>首</span>
                                <span>新用户下单立减17元</span>
                            </div>
                            <div className="indexSale">
                                <span className='indexSale_icon'>减</span>
                                <span>满30减12，满60减24</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【立减17.5元】蛋蛋鸡腿肉饮料套餐</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【立减39.5元】蛋蛋超值双人套餐</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【立减14.88元】双拼豪华单人汤餐</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【五折】酸豆角双拼豪华餐</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【立减17.8元】棒棒哒酸豆角汤餐</span>
                            </div>
                            <div className="GoodsList_button">
                                <span>七个活动</span>
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt=""/>
                            </div>

                        </div>

                    </div>
                </div>
                <div  className='GoodsList_container'>
                    <div className="GoodsList_info">
                        <div className='GoodsList_Image'>
                            <img src="https://fuss10.elemecdn.com/a/b3/259e1b77a1d4896f20f584087a9c4jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt=""/>
                        </div>
                        <div className="GoodsList_main">
                            <div className="GoodsList_line1">
                                <i>品牌</i>
                                <span className='GoodsList-title'>
            真功夫(北京搜秀店)

        </span>

                            </div>


                            <div className='GoodsList_line2'>
                                <div className="GoodsList_inner">
                                    <img className='GoodsList_logo' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt=""/>
                                    &nbsp;<span className='GoodsList_rate'>4.8</span>&nbsp;&nbsp;
                                    <span>月售2036单</span>
                                    <span className='special_give'>蜂鸟转送</span>
                                </div>
                            </div>

                            <div className="GoodsList_line3 clearfix">
                                <span className='GoodsList_start'>￥5起送</span>&nbsp;
                                |&nbsp;<span>
                配送费￥6
            </span>
                                <div className='GoodsList_time_distance'>
                                    <span>2.26km</span>&nbsp;|&nbsp;
                                    <span>47分钟</span>

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="activeWrapper">
                        <div className='index_targetLine'>
                            <i className='iconfont icon-icon_found_koubei'>

                            </i>
                            <span>口碑人气好店</span>
                        </div>

                        <div className="activeInner">
                            <div className="indexActive">
                                <span className='indexActive_icon'>首</span>
                                <span>新用户下单立减17元</span>
                            </div>
                            <div className="indexSale">
                                <span className='indexSale_icon'>减</span>
                                <span>满30减12，满60减24</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【立减17.5元】蛋蛋鸡腿肉饮料套餐</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【立减39.5元】蛋蛋超值双人套餐</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【立减14.88元】双拼豪华单人汤餐</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【五折】酸豆角双拼豪华餐</span>
                            </div>
                            <div className="indexSpecial">
                                <span className='indexSpecial_icon'>特</span>
                                <span>【立减17.8元】棒棒哒酸豆角汤餐</span>
                            </div>
                            <div className="GoodsList_button">
                                <span>七个活动</span>
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt=""/>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        )
    }
}
export default connect()(GoodsList)