import React,{useEffect} from 'react';
import { Table, } from 'react-bootstrap'
import {connect,useSelector} from 'react-redux'
import {getUser} from '../actions/userAction'
import Forms from './Form';

const UserList = ({getUser}) => {
  
  // useEffect(props.getUser())
  useEffect(() => {
    getUser()
  })
  const users = useSelector(state =>  state.user.users)
       
    const user =users.map((user, index) => (
      <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.FirstName}</td>
      <td>{user.LastName}</td>
      <td>{user.Birthday.toLocaleString("us").split(',')[0]}</td>        
      <td>{user.Age}</td>
      <td>{user.Hobby}</td>
      </tr>
    ))
     return ( 
        <div>
           <Forms/>
        <Table striped>
        <thead>
        <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Birthday</th>
        <th>Age</th>
        <th>Hobby</th>       
        </tr>
        </thead>
        <tbody>
        {user}
        </tbody>
        </Table>
            
       </div>
     );
}


export default connect(null,{getUser})(UserList)