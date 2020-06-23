import React, { Component } from 'react';
import axios from 'axios';


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            username: "",
            password: "",
            email: ""
        }

    }
    componentDidMount() {
        axios.get('http://localhost:3000/register/')
            .then(response => console.log(response.data))
            .catch((error) => {
                console.log(error);
            })
    }

    handleChange(e) {
        var value = e.target.value;
        var name = e.target.name;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleClick(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }

        axios.post('http://localhost:3000/register', user)
            .then(res => console.log(res.data));

        this.setState({
            username: "",
            password: "",
            email: ""
        });



    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <label htmlFor="u" >Username:</label>
                    <input id="u" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <label htmlFor="p" >Password:</label>
                    <input id="p" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <label htmlFor="e" >Email:</label>
                    <input id="e" type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleClick}>Register</button>
                    <a href="/" >Create new account</a>
                </form>
            </div>

        );
    }
}