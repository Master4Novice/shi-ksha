import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="row">
                <div><br/><br/>
                    <h5>
                        <span>W</span>
                        <span>E</span>
                        <span>L</span>
                        <span>C</span>
                        <span>O</span>
                        <span>M</span>
                        <span>E</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>S</span>
                        <span>T</span>
                        <span>U</span>
                        <span>D</span>
                        <span>E</span>
                        <span>N</span>
                        <span>T</span>
                        <span>S</span>
                    </h5><br/><br/>
                </div>
                <div className="row" style={{fontSize: 19 }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p>
                            Searching for learning subjects with basic concepts, then you came to
                            right place. <span className="rainbow" style={{backgroundColor: 'black'}}>ShiKsha</span> tutorial provides all
                            the study materials and full guidance to students to improve their basics and makes them
                            capable of performing well in all aspects of studies.
                        </p>
                        <p>
                            Studying is not just about mugging up the syllabus, but learning things with interest
                            and with the sense of gaining knowledge, not just marks. Marks can only make your
                            certificate look good but knowledge will make you perfect to survive in this competitive world and will make you
                            feel good about yourself.
                        </p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}

export default Content;