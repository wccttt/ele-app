import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink,Link} from 'react-router-dom';
import IndexLink from 'react-router-dom/Link';

import './Tab.less';
 class Tab extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <footer className='footerBox'>
                <ul>
                    <li>
                            <IndexLink to='/'  className='active'>
                                <i className='iconfont icon-shouye- '>
                                </i>
                                首页
                            </IndexLink>
                        </li>

                        <li>
                            <NavLink to='/find'>
                                <i className='iconfont icon-faxian'>
                                </i>
                                发现
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to='/order'>
                                <i className='iconfont icon-iconfontdingdan'>
                                </i>
                                订单
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to='/profile' className={this.props.active}>
                                <i className='iconfont icon-wodeweixuanzhong'>
                                </i>
                                我的

                            </NavLink>

                        </li>
                    </ul>

            </footer>

        )
    }
}
export default connect()(Tab)