import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './Shop.less';
  class Shop extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='eleApp_shop'>
                <div className="shop_header_box">
                    <header>

                        <i className='iconfont icon-fanhui'></i>
                        <img src="https://fuss10.elemecdn.com/a/b3/259e1b77a1d4896f20f584087a9c4jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt=""/>
                    </header>
                </div>
                <div className="shop_header">

                    <div className="shop_header_titleBox">
                        <h2 className='shop_header_title1'>
                            <span className='shop_header_first'>品牌</span>
                            <span className='shop_header_second'>真功夫(北京搜秀店)</span>
                            <i className='iconfont icon-tiaozhuan'>

                            </i>
                        </h2>
                        <div className="shop_header_title2">
                            <span className='shop_score'>4.9</span>
                            <span className='shop_sale'>月售1929单</span>
                            <span className='shop_give'>商家配送</span>
                            <span className='shop_time'>约48分钟</span>
                            <span className='shop_distance'>距离2.3km</span>
                        </div>
                        <div className='shop_header_title3'>
                            <p>迎光临真功夫，用餐高峰期请提前下单，我们将会立刻处理外卖订单，遇到阴雨天可能会出现稍有延误的情况，我们将配合骑手用心出餐，为您提供最优质，舒心的服务，是我们不变的追求</p>
                        </div>
                        <div className="shop_header_title4 clearfix">
                           <div className="shop_header_title4First">
                               <span className='shop_header_active1'>首单</span>
                               <span className='shop_header_content'>新用户下单立减17元(不与其他活动同享)</span>
                           </div>
                            <div className="shop_header_count">
                                <span className=''>6个活动 <i className='shop_header_tran'> </i>    </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
export default connect()(Shop)