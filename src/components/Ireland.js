import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

//main page , explains the application
class Ireland extends Component {
    render() {
        return (
            <div>
                <h1>Welcome To Ireland</h1>
                <h2>
                    This is a Map of Ireland , as you can see It is made up of 32 counties.
                    <p></p>
                    Threre are 26 counties in The Republic and 6 in Northern Ireland
                    <p></p>
                    It has 4 Provences Connacht, Ulster , Munster and Lenister
                    <p></p>
                    This App alows you to see the flag and population of all counties.
                </h2>
                <img src={"http://images.fanpop.com/images/soapbox/ireland_1629_top.jpg?cache=1200512708"}></img>    
            </div>
        );
    }
}
export default Ireland;