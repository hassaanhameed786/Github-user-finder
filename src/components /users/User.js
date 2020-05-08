import React, { Component } from 'react'

export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }
    
    render() {
        const{

            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            followings,
            public_repos,
            public_gists,
            hireable


            
        } = this.props.User;

        const {loading} = this.props;


        return (
            <div>
                {name} {avatar_url}
            </div>
        )
    }
}

export default User