import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
export default  class Address extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                Address
            </div>
        )
    }
}
export default connect()(Address);