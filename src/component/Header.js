import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './Header.less'
  class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <header className='headerBox'>
                    <div className="headerInner">
                        <i className='iconfont icon-weizhi'></i>
                        <span className='location'>北京市朝阳区通惠家园惠生园2单元102</span>
                        <i className='arrowDown'></i>
                    </div>

                </header>
                {/*模拟搜索框*/}
                <NavLink to='/search' >
                    <div className="searchBox" id='searchBox'>
                        <div className='searchInner'>
                            <i className='iconfont icon-fangdajing'>
                            </i>
                            <span className='searchText'>搜索饿了么商家，商品名称</span>
                        </div>
                    </div>
                </NavLink>


            </div>
        )
    }
}
export default connect()(Header)