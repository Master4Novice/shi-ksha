import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faCopyright } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Home from '../components/home/home';
import Details from '../components/details/details';

library.add(faStroopwafel, faCopyright);

class App extends Component {
  render() {
    return (
        <div className="container">
            <Header/>
            <div className="row">
                <div className="col-md-12">
                    <br/><br/><br/>
                    <Switch>
                        <Route exact path='/' component={ Home }/>
                        <Route path='/details' component={ Details }/>
                    </Switch>
                    <br/><br/><br/>
                </div>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default App;
