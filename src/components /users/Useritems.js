import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {

    state ={
        text:''

    };

    //propTypes

    static propTypes={
        SearchGitUsers:PropTypes.func.isRequired,
        clearUsers:PropTypes.func.isRequired,
        Showclear:PropTypes.bool.isRequired,
        set_alert:PropTypes.func.isRequired

    }

    onSubmit=(e) =>{
        e.preventDefault();
        if (this.state.text === '') {
            
            this.props.set_alert(' Please Enter something ' , 'light');
                    
        }

        else{

            this.props.SearchGitUsers(this.state.text);
            this.setState({text:''});

        }
    }

    onChange = (e) =>{
        this.setState({text:e.target.value});
    }

    render() {
       // const { clearUsers , Showclear} = this.props
        return (
            <div>
            <form onSubmit={this.onSubmit} className="form">
                <input type="text" name="text" placeholder="Search users..." value={this.state.text}  onChange={this.onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {this.props.Showclear && 
             
            <button className="btn btn-dark btn-block" onClick={this.props.clearUsers}>Clear</button>
            }
            </div>
        )
    }
}

export default Search 
