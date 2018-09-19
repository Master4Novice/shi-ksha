import React, { Component } from 'react';
import Contact from '../contact/contact';
import Facilities from '../facilities/facilities';
import About from '../about/about';
import Content from './content'

import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="row" style={{color: 'white'}}>
                <div className="col-md-12">
                    <div className="row">
                        <Content/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <About card="white" background="red" body="black"/>
                        </div>
                        <div className="col-md-4">
                            <Facilities card="white" background="indigo" body="black"/>
                        </div>
                        <div className="col-md-4">
                            <Contact card="white" background="green" body="black"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;