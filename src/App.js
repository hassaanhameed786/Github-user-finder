import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom';
import Navbar from './components /layout /Navbar';
import axios from 'axios';
import './App.css';
import About from './components /pages/About';
import Alert from './components /layout /Alert';
import Users from './components /users/Users';
import User from './components /users/User';
import Search from './components /users/Search';
class App extends Component {
  // eslint-disable-next-line

  state = {
    users:[],
    loading: false,
    alert:null,
    user: {}
  }

  //Seraching Git users s

  SearchGitUsers = async text =>{
    this.setState({loading:true});


    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   //console.log(res.data)
   this.setState({users :res.data.items, loading:false});
  }

  ///Get single users from 

  getUser =async (username) => 

  {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users/${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   //console.log(res.data)
   this.setState({user :res.data, loading:false});

  }

  //clears users form the state 
  
  


  render() {

    
    return (
      <Router>
      <div> 

        <Navbar /> 


        <div className="container">
        <Alert alert={this.setState.alert}/>

        <Switch>
        <Route exact path="/" render={props =>(

          <Fragment>

          <Search 
          
          SearchGitUsers={this.SearchGitUsers} 
          clearUsers={this.clearUsers}
          Showclear={this.users }
          set_alert={this.set_alert}       /> 
          <Users loading={this.state.loading}  users={this.state.users}/>
        </Fragment>
        
        )}
        
        />
        


        <Route exact path='/about' component={About} />     
        <Route   exact path='/user/:login ' render={ props =>(

          <User {...props} getUser={this.getUser} user={this.state.user} loading={this.state.loading} />
         )} >
        
        
        
        
         </Route>

        </Switch>


        </div>
      </div>

      </Router>

    );
  }
}

export default App;
