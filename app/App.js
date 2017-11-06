import React from 'react';
import UserRow from './UserRow';

class User {
    constructor(name, age, avatar) {
        this.name = name;
        this.age = age;
        this.avatar = avatar;


    }
}

let usersList = [
    new User('Richa', 25, 'https://ibb.co/fsf1o6'),
    new User('Pooja', 30, 'https://ibb.co/fsf1o6'),
    new User('Diksha', 35, 'https://ibb.co/fsf1o6'),
];

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Users List</h1>
                <table>
                    {usersList.map((user) => {
                        return <UserRow user={user} />
                    })}
                </table>
            </div>)
    }

}
