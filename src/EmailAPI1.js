import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Emailist1 extends Component {
    constructor() {
        super();
        this.state = {
            emailName: [],
        }
    }

    getEmail = () => {
        axios.get('https://reqres.in/api/users/3').then(response => {
            // const res = JSON.stringify(response.data.data);
            // console.log(res);
            this.setState({
                emailName: response.data.data,
            })
        })
    }

    componentDidMount() {
        this.getEmail();
    }
    render() {
        return (
            <div className='container mt-5'>
                <h3>API Email 2: {this.state.emailName.email}</h3>
            </div>
        )
    }
}
