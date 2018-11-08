import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {Route, HashRouter, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';

/*public/reset*/

import './common/css/reset.min.css'
import './common/css/public.less';
/*STORE*/
import store from './store/index';

/*MY-COMPONENT*/
import Home from './routers/Home';
import Find from './routers/Find';
import Order from './routers/Order';
import Myprofile from "./routers/Myprofile";
import Search from "./routers/Search";
import Shop from "./routers/Shop";

render(<Provider store={store}>
    <HashRouter>
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/find'  component={Find}/>
            <Route path='/order/:id?'  component={Order}/>
            <Route path='/shop/:id?'  component={Shop}/>
            <Route path='/profile'  component={Myprofile}/>
            <Route path='/search'  component={Search}/>
            <Redirect to='/'/>
        </Switch>
    </HashRouter>
</Provider>, window.root);