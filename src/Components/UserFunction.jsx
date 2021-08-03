import React, { useState, useEffect} from 'react';
import axios from 'axios';
import UserList from './UserList';

const UserFunction = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setUsers(res.data);
        }).catch((err) => {
            alert("An error occurred, please try again")
        });
    }, []);

    console.log(users);
    return (
        <div>
            <h1>Users <i>Function</i> </h1>
            <UserList users={users} />
        </div>
    );
}

export default UserFunction;
