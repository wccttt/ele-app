import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReactSwipe from 'react-swipe';
import {NavLink} from 'react-router-dom'
import  './SwipeList.less';

class SwipeList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {data}=this.props;
        return(
<ReactSwipe>
    <div className='swipeList'>
        <ul className='clearfix'>
            {
data.map((item,index)=>{
    return <li  className='listBox' key={index}>
        <div className='container'>
            <img src={item.link} alt={item.title}/>
        </div>
        <span className='title'>{item.title}</span>

    </li>
})
            }


        </ul>


    </div>
</ReactSwipe>

        )
    }
}
export default  connect()(SwipeList)