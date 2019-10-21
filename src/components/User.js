import React, { Component } from 'react';
import UserList from './UserList';
import uuid from 'uuid'
import Forms from './Forms';


class Users extends Component {
    state = {
        Users: [{
            id: uuid.v4(),
            FirstName: 'imonikhea',
            LastName: 'ugbodaga',
            Birthday: '',
            Age: 29,
            Hobby: 'runing'
        }
        ]
    }
       
     addUser = (newUser) => {
       let Users = [newUser, ...this.state.Users]
       this.setState({
         Users:Users
       })
     } 
      
    render() { 
        return (
            <div>
            <Forms addUser={this.addUser}/>     
      <UserList
       Users={this.state.Users} 
    />
            </div>
          );
    }
}
 
export default Users;