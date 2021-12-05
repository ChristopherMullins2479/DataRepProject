import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

// some comments
class CountyItem extends Component {

constructor(){
    super();
    this.deleteCounty = this.deleteCounty.bind(this);
}
//delete moveie method
deleteCounty(){
    axios.delete('http://localhost:4000/api/counties/'+this.props.county._id)
    .then(()=>{
        this.props.refreshData();
    })
    .catch();
}
    render() {
        return (
            <div>
                {/* some comments  */}
                <Card>
                    <Card.Header>{this.props.county.Name}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.county.Flag}></img>
                            <footer>
                                {this.props.county.Population}
                            </footer>
                        </blockquote>
                    </Card.Body>
<Link to={"/edit/" +this.props.county._id} className="btn btn-primary">Edit</Link>

<Button variant ="danger" onClick={this.deleteCounty}>Delete</Button>
                </Card>
            </div>
        );
    }
}
export default CountyItem;