import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './Search.less'
class Search extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="app-search">
                <div className="app-search-header">
                    <NavLink to='/'>
                        <i className='iconfont icon-fanhui'>
                        </i>
                    </NavLink>
                    <form action="" className='app-search-inner'>

                        <i className='iconfont icon-fangdajing'>
                        </i>
                        <input type="search" placeholder={'输入商家，商品名称'}/>
                        <button type='sumbit' className='submitButton'>
                            搜索
                        </button>
                    </form>
                </div>
                <section>
                    <div className="history clearfix">
                        <span>历史搜索</span>
                        <div className='delete'>
                            <i className='iconfont icon-icon--'>
                            </i>
                        </div>
                    </div>
                </section>
                <section>
                   <div className='historySearch'>
                       <button className='searchButton'>
                           肯德基
                       </button>
                       <button className='searchButton'>
                           椒麻鸡
                       </button>
                   </div>
                </section>
                <section>
                <div className="history">
                    <span>热门搜索</span>
                </div>
                    <button id='searchButton'>
                        炸鸡
                    </button>
                    <button id='searchButton'>
                        酸辣粉
                    </button>
                    <button id='searchButton'>
                        烤鸭
                    </button>
                    <button id='searchButton'>
                      鸡翅
                    </button>
                    <button id='searchButton'>
                        早餐
                    </button>
                    <button id='searchButton'>
                        寿司
                    </button>
                    <button id='searchButton'>
                        会员领红包
                    </button>
                    <button id='searchButton'>
                    驴肉
                    </button>
                </section>

            </div>
        )
    }
}
export default connect()(Search);