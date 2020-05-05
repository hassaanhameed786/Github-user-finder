import React from 'react'
import PropTypes from 'prop-types' 

const Useritems = ({user:{login,avatar_url,html_url}}) =>{ 
        
        return (
            <div className="card text-center">
            
            <img src={avatar_url} alt=""  className="round-img" style={{
                width:'60px'
            }}></img>

            <h3>{login}</h3>
            
            <div>

            <a href={html_url} className="btn btn-dark btn-sm"> More </a>
            </div>
            </div>
        );
    
}
Useritems.prototype ={
    user:PropTypes.object.isRequired,   // ptor <== Hotkey 

};

export default Useritems
