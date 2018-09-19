import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar color="dark" dark expand="lg" fixed="bottom">
                <div className="text-center" style={{color: 'yellow', width: '100%'}}>
                    <FontAwesomeIcon icon="copyright" />&nbsp;<span>copyright @ ShiKsha 2018</span>
                </div>
            </Navbar>
        );
    }
}

export default Footer;