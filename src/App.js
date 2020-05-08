import React, { Component } from 'react';
import Navbar from './components /layout /Navbar';
import axios from 'axios';
import './App.css';

import Alert from './components /layout /Alert';
import Users from './components /users/Users';
import Search from './components /users/Search';
class App extends Component {
  // eslint-disable-next-line

 //now use State & make a arrray of users  for  gettin via api.github
 state = {
  users:[],
  loading: false,
  alert:null
}

  //Seraching Git users s

  SearchGitUsers = async text =>{
    this.setState({loading:true});

    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   //console.log(res.data)
   this.setState({users :res.data.items, loading:false});
  }

 

  //clears users form the state 
  clearUsers =() => this.setState({users:[], loading:false})
  
  //Set_Alert to enter somethings
  // Always use Arrow fun in React ****
  Set_Alert =(msg , type) => {

    this.setState({alert: {msg:msg, type:type}})
  }


  render() {
    return (
      <div > 

        <Navbar /> 

        <div className="container">
        <Alert alert={this.state.alert}/>

        <Search 
        SearchGitUsers={this.SearchGitUsers}
        clearUsers={this.clearUsers} 
        Showclear={this.state.users.length > 0 ? true : false}
        set_alert={this.Set_Alert}
        
        />
        
        <Users loading={this.state.loading}  users={this.state.users}/>
        
        


        
        </div>
      </div>

     
    );
  }
}

export default App;
