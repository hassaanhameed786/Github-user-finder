import React from 'react'
import PropTypes from 'prop-types';


const Navbar =props => {

        return (
            <nav className="navbar bg-primary ">
          <h1> 
          <i className="fab fa-github-square"></i>  
          {props.title} {props.icons}</h1>
          </nav >
            
            )
    };

    // default propertites 
    Navbar.defaultProps = {
     title: 'Git finder',
     icon: 'fab - fa-github'
 
   };

   Navbar.propTypes  ={
     title: PropTypes.string.isRequired,
     icon:PropTypes.string.isRequired
   };


export default Navbar
