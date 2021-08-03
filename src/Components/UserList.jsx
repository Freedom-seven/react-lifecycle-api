import React from 'react';
import Users from './Users';

const UserList = ({users}) => {
    const userList = users.map((data) => {
        return (
            <Users user={data} />
        )
    } )
    return (
        <div>
            {userList}
        </div>
    );
}

export default UserList;
