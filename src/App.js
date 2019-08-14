import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Sidebar } from './views/Sidebar/Sidebar';


import './index.css';

export default class App extends Component 
{
    static displayName = App.name;
  
    render () {
      return (        
        <BrowserRouter>
            <Switch>  
                <Route exact path='/' component={Sidebar} />
            </Switch>
        </BrowserRouter>
      );  
    }
  }
  