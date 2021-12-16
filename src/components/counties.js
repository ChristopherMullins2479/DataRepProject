import React, { Component } from 'react';
import CountyItem from './CountyItem';

class Counties extends Component
{
    render(){
        return this.props.Counties_.map((County_)=>{
            return <CountyItem county={County_} key={County_._id} refreshData = {this.props.refreshData}></CountyItem>
        })
    }
}
export default Counties;