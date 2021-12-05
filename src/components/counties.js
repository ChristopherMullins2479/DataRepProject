import React, { Component } from 'react';
import CountyItem from './CountyItem';

class Counties extends Component
{
    render(){
        return this.props.myCounties.map((film)=>{
            //return <CountyItem movie={film} key={film.imdbID} refreshData = {this.props.refreshData}></CountyItem>
        })
    }
}
export default Counties;