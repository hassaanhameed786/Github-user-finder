import React, { Component } from 'react';
import Navbar from './components /layout /Navbar';
import axios from 'axios';
import './App.css';


import Users from './components /users/Users';
import Search from './components /users/Search';
class App extends Component {
  // eslint-disable-next-line


  //Seraching Git users s

  SearchGitUsers = async text =>{
    this.setState({loading:true});

    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   //console.log(res.data)
   this.setState({users :res.data.items, loading:false});
  }

  //now use State & make a arrray of users  for  gettin via api.github
  state = {
    users:[],
    loading: false
  }

  // takes a http request for github api 
  // async componentDidMount(){

  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

  //   this.setState({loading:true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //  //console.log(res.data)
  //  this.setState({users :res.data, loading:false});
  // }


  //clears users form the state 
  clearUsers =() => this.setState({users:[], loading:false})
  


  render() {
    return (
      <div > 

        <Navbar /> 
        <Search clearUsers={this.clearUsers} SearchGitUsers={this.SearchGitUsers}/>


        <div className="container">
        <Users loading={this.state.loading}  users={this.state.users}/>
        
        </div>
      </div>

     
    );
  }
}

export default App;
