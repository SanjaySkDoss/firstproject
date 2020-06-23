import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state={
            username:"",
            password:""
        }
       
    }
    componentDidMount() {
        axios.get('http://localhost:3000/')
            .then(response => console.log(response.data))
            .catch((error) => {
                console.log(error);
            })
    }

    handleChange(e){
        var value = e.target.value;
        var name = e.target.name;
        this.setState({
            ...this.state,
            [name] : value
        })
    }
    
    handleClick(e){
        e.preventDefault();
        const user = {
            username: this.state.username,
            password:this.state.password
          }
          
    axios.post('http://localhost:3000/', user)
    .then(res => console.log(res.data));
      
    this.setState({
        username: "",
        password: ""
    });
          
     
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <label htmlFor="u" >Username:</label>
                    <input id="u" type="text" name="username" value={this.state.username}  onChange={this.handleChange}/>
                    <label htmlFor="p" >Password:</label>
                    <input id="p" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleClick} >Log in</button>
                    <a href="/register" >Create new account</a>
                </form>
            </div>

        );
    }
}