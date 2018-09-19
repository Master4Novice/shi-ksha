import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: { 'name': 'Neha Dubey', 'address': 'K.R.Puram, Bangalore', 'contact': '8299358319', 'email': 'imnehadubey90@yahoo.com' },
        };
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" style={ { color: this.props.card , backgroundColor: this.props.background } }>
                   Contact Us
                </div>
                <div className="card-body" style={ { color: this.props.body } }>
                    <p>
                        Contact Name : {this.state.person.name}<br/>
                        Contact Address : {this.state.person.address}<br/>
                        Contact No. : {this.state.person.contact}<br/>
                        E-mail : {this.state.person.email}<br/>
                    </p>
                </div>
            </div>
        );
    }
}
export default Contact;