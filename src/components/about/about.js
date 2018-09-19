import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: { "name": "Neha Dubey", "address": "K.R.Puram, Bangalore", "contact": "8299358319", "email": "imnehadubey90@yahoo.com"},
        };
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" style={{color: this.props.card , backgroundColor: this.props.background}}>
                    About Us
                </div>
                <div className="card-body" style={{color: this.props.body}}>
                    <p>We provide tuition to students from class VI to XII
                        &nbsp;<Link to={'/details'}>Click To Know More...</Link><br/><br/>
                        <Link to={'/register'}>Register With Us</Link>
                    </p>
                </div>
            </div>
        );
    }
}
export default About;