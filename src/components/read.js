import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class Read extends Component
{
    constructor(){
        super();
        this.refreshData = this.refreshData.bind(this);
    }

    refreshData(){

        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({mymovies: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({mymovies: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        mymovies: []            
    };

    render(){
        return(
            <div>
                <h1>This is my Read component!</h1>
                <Movies films={this.state.mymovies} refreshData = {this.refreshData}></Movies>
            </div>
        );
    }
}
export default Read;