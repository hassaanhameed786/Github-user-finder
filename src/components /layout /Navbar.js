import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class Navbar extends Component {

     // default propertites 
     static defaultProps = {
      title: 'Git finder',
      icon: 'fab - fa-github'
  
    }

    static propTypes  ={
      title: PropTypes.string.isRequired,
      icon:PropTypes.string.isRequired
    }
  
  
    render() {
        return (
            <nav className="navbar bg-primary ">
          <h1> 
          <i className="fab fa-github-square"></i>  
          {this.props.title} {this.props.icons}</h1>
          </nav >
            
            )
    }
}

export default Navbar
