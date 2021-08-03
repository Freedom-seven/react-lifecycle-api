import React, { Component } from 'react';
import UserList from './UserList';

class UsersClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((users) =>{ this.setState({
            users: users
        });
    }).catch((err)=>{
        alert("An error occurred, please try again");
    })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Users</h1>
                <UserList users={this.state.users} />
            </div>
        );
    }
}

export default UsersClass;
