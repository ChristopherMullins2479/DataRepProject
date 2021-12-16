import React, { Component } from 'react';
import axios from 'axios';


class Edit extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeCountyName = this.onChangeCountyName.bind(this);
        this.onChangeCountyPopulation = this.onChangeCountyPopulation.bind(this);
        this.onChangeCountyFlag = this.onChangeCountyFlag.bind(this);
        this.state = {
            Name: '',
            Population: '',
            Flag: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/counties/'+ this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Name:response.data.Name,
                Population:response.data.Population,
                Flag:response.data.Flag,
                _id:response.data._id
            })
        })
        .catch();
    }

    handleSubmit(event) {
        console.log("Name: " +this.state.Name+
        " Population: " + this.state.Population +
        "Flag: " + this.state.Flag);

        const NewCounty = {
            Name: this.state.Name,
            Population: this.state.Population,
            Flag: this.state.Flag
        }

        axios.put('http://localhost:4000/api/counties/' + this.state._id, NewCounty)
        .then((response)=>{console.log(response)})
        .catch();
        

        event.preventDefault();
        this.setState({
            Name:'',
            Population:'',
            Flag:''
        });
    }
    onChangeCountyName(event) {
        this.setState({
            Name: event.target.value
        })
    }
    onChangeCountyPopulation(event) {
        this.setState({
            Population: event.target.value
        })
    }
    onChangeCountyFlag(event){
        this.setState({
            Flag: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Edit County Info</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Edit County Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeCountyName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit County Population: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Population}
                            onChange={this.onChangeCountyPopulation}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit County Flag: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Flag}
                            onChange={this.onChangeCountyFlag}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Confirm"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Edit;