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
            this.setState({mycounties: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        mycounties: []            
    };

    render(){
        return(
            <div>
                <h1>This is my Read component!</h1>
            </div>
        );
    }
}
export default Read;