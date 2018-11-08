import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReactSwipe from 'react-swipe';
import 'swipe-js-iso';
import './Banner.less';
import {withRouter} from 'react-router-dom'

  class Banner extends Component{
      static defaultProps={
          startSlides:0,
          auto:0
      };
      static propTypes={
          auto:PropTypes.number,
          startSlides:PropTypes.number,
          data:PropTypes.array.isRequired

      };
    constructor(props){
        super(props);
        this.state={
            index:this.props.startSlides
        }
    }
    render(){
        let {auto,data}=this.props;
        let {index}=this.state;
        if(index>=2){
            index=index-2;
        }
        return(
            <div className="bannerBox">
                <ReactSwipe
                    swipeOptions={{
                        auto,
                        disableScroll:false,
                        startSlides:index,
                        callback:index=>{
                            this.setState({index})
                        }
                    }}>

                    {
                    data.map((item,ind)=>{
                        return<div key={ind}><img src={item.img} alt={item.title}/></div>
                    })
                }
                </ReactSwipe>
                <ul className='clearfix focus'>
                    {
                        data.map((item,ind)=>{
                            return <li key={ind} className={ind===index?'active':''}>

                            </li>;

                        })
                    }

                </ul>

            </div>

        )
    }
}

export default withRouter(connect()(Banner));