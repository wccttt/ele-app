import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './NavHeader.less';
  class TabHeader extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }


    render(){
        let text=this.props.text;
        return(
            <div>
                <header className='tabHeader'>
                    <span>{text}</span>
                </header>
                <NavLink to='/'>
                    <div className='iconBox'>
                        <i className='iconfont icon-fanhui'>

                        </i>
                    </div>
                </NavLink>
            </div>
        )
    }
}

export default connect()(TabHeader);

