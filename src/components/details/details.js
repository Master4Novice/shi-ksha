import React, { Component } from 'react';

class Details extends Component {
    render() {
        return (
            <div className="col-sm-8">
                <p style={ { fontSize: '140%' } }>
                    <br/><br/>&nbsp;We offer learning for the students from class VI to XII.<br/>&nbsp;Subjects that we provide tutions for:<br/><br/>
                </p>
                <h4>&nbsp;CLASS VI-X:</h4>
                <ul>
                    &nbsp;<li>SCIENCE</li>
                    &nbsp;<li>MATHS</li>
                </ul><br/>
                <h4>&nbsp;CLASS XI-XII:</h4>
                <ul>
                    &nbsp;<li>PHYSICS</li>
                    &nbsp;<li>CHEMISTRY</li>
                    &nbsp;<li>MATHS</li>
                    &nbsp;<li>COMPUTER SCIENCE</li>
                </ul>
            </div>
        );
    }
}
export default Details;