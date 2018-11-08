import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Tab from '../component/Tab'
import NavHeader from '../component/NavHeader'
import "./Myprofile.less"
class Myprofile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Myprofile_box'>
                <div className='tabHeader_box'>
                    <NavHeader text='我的'/>
                </div>

                <section>
                    <div className='profile_wrapper'>
                        <span className='profile_icon'>
                            <i className='iconfont icon-geren2'></i>
                        </span>
                        <div className="profile_login">
                            <p className='profile_text'>登陆/注册</p>
                            <p className='profile_loginLater'>
                                <i className='iconfont icon-shouji'></i>
                                <span className=''>登录后享受更多特权</span>
                            </p>
                        </div>
                        <span className='profile_go'>
<i className='iconfont icon-tiaozhuan'></i>
                        </span>

                    </div>
                </section>

                <div className='money_gold_purse'>
                    <div className="third_box">
                        <p >
                            <i className='iconfont icon-jinbi'></i>
                        </p>
                        <p className='purse'>钱包</p>
                    </div>

                    <div className="third_box">
                        <p >
                            <i className='iconfont icon-hongbao2'></i>
                        </p>
                        <p className='purse'>红包</p>
                    </div>
                    <div className="third_box">
                        <p >
                            <i className='iconfont icon-jinbi1'></i>
                        </p>
                        <p className='purse'>金币</p>
                    </div>
                </div>
                <div className="empty">

                </div>


                <section>
                    <div className="index_login">
                        <div className='index_icon'>
                            <i className='iconfont icon-weizhi1'></i>
                        </div>
                        <div className='clearfix'>
                            <span>我的地址</span>
                            <i className='iconfont icon-tiaozhuan'></i>
                        </div>
                    </div>
                </section>
                <div className="empty">

                </div>
                <section>
                    <div className="index_login">
                        <div className='index_icon'>
                            <i className='iconfont icon-shangcheng' id='icon-shangcheng'></i>
                        </div>
                        <div className='clearfix'>
                            <span>金币商城</span>
                            <i className='iconfont icon-tiaozhuan'></i>
                        </div>
                    </div>
                    <div className="index_login">
                        <div className='index_icon'>
                            <i className='iconfont icon-gift-box-red'></i>
                        </div>
                        <div className='clearfix'>
                            <span>分享拿5元现金</span>
                            <i className='iconfont icon-tiaozhuan'></i>
                        </div>
                    </div>
                </section>
                <div className="empty">

                </div>
                <section>
                    <div className="index_login">
                        <div className='index_icon'>
                            <i className='iconfont icon-erji'></i>
                        </div>
                        <div className='clearfix'>
                            <span>我的客服</span>
                            <i className='iconfont icon-tiaozhuan'></i>
                        </div>
                    </div>
                    <div className="index_login">
                        <div className='index_icon'>
                            <i className='iconfont icon-faxian'></i>
                        </div>
                        <div className='clearfix'>
                            <span>下载饿了么APP</span>
                            <i className='iconfont icon-tiaozhuan'></i>
                        </div>
                    </div>
                </section>
                <div className="emptyBig">

            </div>

                <div className="tabBox">
                    <Tab/>
                </div>
            </div>
        )
    }
}
export default connect()(Myprofile);