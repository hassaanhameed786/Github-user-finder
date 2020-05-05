import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {

    state ={
        text:''

    };


    //propTypes

    static propTypes={
        clearUsers:PropTypes.func.isRequired,
        SearchGitUsers:PropTypes.func.isRequired

    }

    onSubmit=(e) =>{
        e.preventDefault();
        this.props.SearchGitUsers(this.state.text);
        this.setState({text:''});
    }

    onChange = (e) =>{
        this.setState({text:e.target.value});
    }

    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit} className="form">
                <input type="text" name="text" placeholder="Search users..." value={this.state.text}  onChange={this.onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
                
            </div>
        )
    }
}

export default Search 

