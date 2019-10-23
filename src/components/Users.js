import React, { Component } from 'react';
import UserList from './UserList';
import Forms from './Form';


class Users extends Component {
  state = {
      // create User data
      Users: [
        {
            FirstName: 'imonikhea',
            LastName: 'ugbodaga',
            Birthday: '10/10/1997',
            Age: 29,
            Hobby: 'runing'
        }
        ]
  }

     //Attempt to create a addNewUser
     addUser = (newUser) => {
       let Users = [...this.state.Users, newUser]
      
       this.setState({
       Users
       })
       } 
      
    render() { 
        return (
            <div>
            <Forms
            // pass the addUser function as props to the form components
            addUser={this.addUser} 
            />     
            
            <UserList
            // passing the users state as props to the UserList components
            Users={this.state.Users} 
            />
            </div>
          );
    }
}
 
export default Users;