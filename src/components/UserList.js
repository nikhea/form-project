import React, { Component } from 'react';
import { Table } from 'react-bootstrap'

class UserList extends Component {
  
   
    state = {  
        
    }
    
    render() { 
        console.log(this.props.Users)
        const users = this.props.Users.map(user => (
        
          
              <tr striped key={user.id}>
               
                <td>{user.FirstName}</td>
                <td>{user.LastName}</td>
                <td>{user.Birthday}</td>        
                <td>{user.Age}</td>
                <td>{user.Hobby}</td>
                </tr>
            
           
          
        ))
        return (
            <div>
              <Table striped>
              <thead>
              <tr>
                
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birthday</th>
                <th>Age</th>
                 <th>Hobby</th>       
              </tr>
                    </thead>
                    <tbody>
                         {users}
                    </tbody>
                      
              </Table>

            </div>
          );
    }
}
 
export default UserList;