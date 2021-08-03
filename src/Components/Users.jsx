import React from 'react';
import Table from 'react-bootstrap/Table';

const Users = ({user}) => {
    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>{user.col}</th>
      <th>Name</th>
      <th>Email</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.username}</td>
    </tr>
  </tbody>
</Table>
        </div>
    );
}

export default Users;
