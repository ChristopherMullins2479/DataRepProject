import React, { Component } from 'react';
import axios from 'axios';

class Create extends Component {
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

    handleSubmit(event) {
        console.log("Name: " +this.state.Name+
        " Population: " + this.state.Population +
        "Flag: " + this.state.Flag);

        const NewCounty = {
            Name: this.state.Name,
            Population: this.state.Population,
            Flag: this.state.Flag
        }

        axios.post('http://localhost:4000/api/counties', NewCounty)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err);
        })

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
                <h1>Add County to Database</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add County Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeCountyName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add County Population: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Population}
                            onChange={this.onChangeCountyPopulation}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add County Flag: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Flag}
                            onChange={this.onChangeCountyFlag}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Add County"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Create;