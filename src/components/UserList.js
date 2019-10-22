import React from 'react';
import { Table } from 'react-bootstrap'


const UserList = (props) => {

    // console.log(props.Users)
    const users =props.Users.map((user, index) => (
    
      <tr key={index}>
      <td>{user.FirstName}</td>
      <td>{user.LastName}</td>
      <td>{user.Birthday.toLocaleString("us").split(',')[0]}</td>        
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
export default UserList;