import React, { Component } from 'react';

class Facilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facilities: ['Avail Notes','Regular assignments','Extra classes as required','Short duration tests on regular basis'],
        };
        this.listItems = this.state.facilities.map((facility) => <li>{facility}</li>);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" style={{color: this.props.card , backgroundColor: this.props.background}}>
                    Facilities
                </div>
                <div className="card-body" style={{color: this.props.body}}>
                    <ul>
                        {this.listItems}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Facilities;