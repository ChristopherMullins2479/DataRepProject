import React, { Component } from 'react';
import Counties from './counties';
import axios from 'axios';

class Read extends Component
{
    constructor(){
        super();
        this.refreshData = this.refreshData.bind(this);
    }

    refreshData(){

        axios.get('http://localhost:4000/api/counties')
        .then((response)=>{
            this.setState({mycounties: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/counties')
        .then((response)=>{
            console.log(response.data)
            this.setState({myCounties: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        myCounties: []            
    };

    render(){
        return(
            <div>
                <h1>Irish Counties</h1>
                <Counties Counties_={this.state.myCounties} refreshData = {this.refreshData}></Counties>
            </div>
        );
    }
}
export default Read;