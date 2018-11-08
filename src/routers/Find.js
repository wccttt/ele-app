import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Tab from '../component/Tab'
import NavHeader from '../component/NavHeader'
import './Find.less'
let imgData=[
    {
        id:1,
        title:'食项全能饱卫战，抢千万霸王餐',
        link:'https://fuss10.elemecdn.com/5/2f/94338b99657d5c2a3de1ba17cb660jpeg.jpeg'
    }
];
let enterImgData=[
    {
        id:1,
        title:'百元红包',
        tips:'兴业银行联名卡',
        link:'https://fuss10.elemecdn.com/3/cc/a45d2b9d7d09bbc49b40d4e626093jpeg.jpeg?imageMogr/format/webp/'
    },
    {
        id:2,
        title:'金币商城',
        tips:'0元好物在这里',
        link:'https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/'
    },
    {
        id:3,
        title:'推荐有奖',
        tips:'5元现金拿不停',
        link:'https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/'
    },
    {
        id:4,
        title:'周边优惠',
        tips:'领取口碑好卷',
        link:'https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/'
    },
    {
        id:5,
        title:'必吃爆料',
        tips:'最夯外卖指南',
        link:'https://fuss10.elemecdn.com/2/36/b784087aff96a97f4e5183d0d784fjpeg.jpeg?imageMogr/format/webp/'
    },
    {
        id:6,
        title:'限时特惠',
        tips:'领取7元优惠卷',
        link:'https://fuss10.elemecdn.com/c/e9/8b589472823fa97666cef19af644cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
    },
];
let activeData=[
    {
        id:1,
        title:'七元饿了么红包',
        gold:'210金币',
        realPrice:'￥7',
        link:'https://fuss10.elemecdn.com/7/c5/f595b52bc6b50c9899398dccffd42jpeg.jpeg?imageMogr/format/webp/'
    },
    {
        id:2,
        title:'扫地机器人',
        gold:'9金币',
        realPrice:'￥99',
        link:'https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/'
    },
    {
        id:3,
        title:'机械手感键鼠套装',
        gold:'9金币',
        realPrice:'￥129',
        link:'https://fuss10.elemecdn.com/5/17/bbc669132d02deae9300c45097a19jpeg.jpeg?imageMogr/format/webp/'
    },
];

  class Find extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {/*NavHeader*/}
                <div className='tabHeader_box'>
                   <NavHeader text='发现'/>
                </div>
                {/*NavHeader_Img*/}

                <div className='NavHeader_img'>
                    {
                        imgData.map((item,index)=>{
                            return<img src={item.link} alt={item.title} key={index} />;

                        })
                    }
                </div>


                <div className='wrapper_list3'>
                    <ul className='listBox clearfix'>
                        {
                            enterImgData.map((item,index)=>{
                                return (<li className='content_wrapper' key={index}>
                                    <div className='content_inner'>
                                        <p className='title'>{item.title}</p>
                                        <p className='tips'>{item.tips}</p>
                                    </div>
                                    <div className='content_img'>
                                        <img src={item.link} alt={item.title}/>
                                    </div>
                                </li>)
                            })
                        }
                    </ul>
                </div>

<section>
    <div className="active_header">

<i className='iconfont icon-icon-test'>

</i>
        <span>限时好礼</span>

    </div>
    <p className='active_sub_title'>金币换豪礼</p>

    {
        activeData.map((item,index)=>{
            return(  <div className="active_body" key={index}>
                <div className="active_img">
                    <img src={item.link} alt={item.title}/>
                </div>
                <div className='active_commend'>
                    <p className='active_description'>{item.title}</p>
                    <div className=" food_info ">
                        <span className='gold'>{item.gold}</span>
                        <del className='original_price'>{item.realPrice}</del>

                    </div>

                </div>
                <span className='discount'>限时特惠</span>
            </div>)
        })
    }
    <div className='active_more'>
        <p>查看更多</p>
        <i className='iconfont'></i>

    </div>

</section>


                <div id='tabBox'>
       <Tab/>
                </div>
            </div>
        )
    }
}
export default connect()(Find);