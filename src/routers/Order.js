import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Tab from '../component/Tab'
import NavHeader from '../component/NavHeader'
import './Order.less';
let imgData=[
    {
        id:1,
        title:'登陆提示图',
        link:'https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png'
    }
];
class Order extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {title,link,id}=imgData[0];
        return(
            <div>
                <div className='tabHeader_box'>
                    <NavHeader text='订单'/>
                </div>

                <section className='login_box'>
                    <div className='login_box_img'>
                        <img src={link} alt={title}/>
                    </div>
                    <h3>登录后查看外卖订单</h3>
                    <button>立即登陆</button>
                </section>
              <div className="tabBox">
                  <Tab/>
              </div>
            </div>
        )
    }
}
export default connect()(Order);