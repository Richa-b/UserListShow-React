import React from 'react';

const  UserRow = (props) => (
    <tr>
        <td>{props.user.name}</td>
        <td>{props.user.age}</td>
        <td><img src ={props.user.avatar}/></td>
    </tr>
);

export default UserRow;

