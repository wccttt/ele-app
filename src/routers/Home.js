import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Home.less';
import Header from '../component/Header';
import Banner from '../component/Banner';
import SwipeList from '../component/SwipeList';
import Tab from '../component/Tab';
import GoodsList from '../component/GoodsList';
let imgData=[
    {
        id:1,
        title:'春季外卖节，赢100元红包',
        img:'https://fuss10.elemecdn.com/3/72/16598634401205f39786536114539jpeg.jpeg?imageMogr/format/webp/'
    },   {
        id:2,
        title:'新用户专享，领最高50元大礼包',
        img:'https://fuss10.elemecdn.com/0/e7/64044fb6df771e9cb42196ae3eeeejpeg.jpeg?imageMogr/format/webp/'
    }

];
let swipeListData=[
    {
        id:1,
        title:'美食',
        link:'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
    },
    {
        id:2,
        title:'晚餐',
        link:'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
    },
    {
        id:3,
        title:'商超便利',
        link:'https://fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
    },
    {
        id:4,
        title:'果树生鲜',
        link:'https://fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
    },
    {
        id:5,
        title:'医药健康',
        link:'https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
    },
    {
        id:6,
        title:'大牌5折',
        link:'https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
    },
    {
        id:7,
        title:'浪漫鲜花',
        link:'https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
    },
    {
        id:8,
        title:'麻辣烫',
        link:'https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
    },
    {
        id:9,
        title:'地方菜系',
        link:'https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
    },
    {
        id:10,
        title:'披萨意面',
        link:'https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
    }
    ];

 class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            bannerData:[],
            listData:[]
        }
    }
    componentWillMount(){
        this.setState({
            bannerData:imgData,
            listData:swipeListData
        })
    }
    render(){

        return(
            <div>
                {/*头部导航条HEADER*/}
                <div className='WrapperBox' >
                    <Header/>
                </div>
                {/*BANNER轮播图*/}

                <Banner auto={3000} data={this.state.bannerData}/>

                {/*分类列表SWIPELIST*/}
                <div className="swipeListBox">
                    <SwipeList data={this.state.listData} />
                </div>
                {/*newuser 红包*/}
                <div className="hongbao">
                    <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/" alt=""/>
                </div>
                {/*推荐商家组合*/}
              <section>
                  <div className='recommend'>
                      <div className="innerBox">
                          <div className="wrapperText">
                              <h3>限量抢购</h3>
                              <div className="text">超值美味&nbsp;9.9元起</div>
                              <div className='people'>
                                  <span>1911人</span>
                                  正在抢&nbsp;>
                              </div>
                          </div>
                          <div className='rightImage'>
                              <img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt=""/>
                          </div>
                      </div>

                  </div>
              </section>
                {/**/}
                <section>
                    <div className='GoodsList-nav'>
                        ——
                        推荐商家
                        ——
                    </div>
                    <div className='GoodsListBox'>
                        <GoodsList/>

                    </div>

                </section>
                <div className='tabBox'>
                    <Tab/>
                </div>
                </div>

        )
    }
}
export default connect()(Home);