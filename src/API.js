import React, { Component } from 'react';
import axios from 'axios';
class ApiEmail1 extends Component {
    constructor() {
        super();
        this.state = {
            email: []
        }
    }

    getCity = () => {
        let url = "https://reqres.in/api/users/1";

        axios.get(url).then(response => {
            console.log(response.data.email);
            const email = response.data.data;
            console.log(email);
            if (response.data.length > 0) {
                this.setState({
                    email: response.data.email
                })
            }
        })
    }

    componentDidMount() {
        this.getCity();
    }

    render() {
        return (
            <div className="container">
                <h2 align="center">
                    Available City : {this.state.email.length}
                </h2>
                {
                    this.state.email.map((cityinfo , index)=>{
                        return(
                            <p className="city" key={index}> {cityinfo.name} - {cityinfo.name.length} chars</p>
                        )
                    })
                }
            </div>
        )
    }
}

export default ApiEmail1;