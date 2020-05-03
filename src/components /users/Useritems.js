import React, { Component } from 'react'

export class Useritems extends Component { 

    render() {

        const{login,avatar_url,html_url}=this.props.user 
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
}

export default Useritems
