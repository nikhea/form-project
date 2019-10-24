import React,{useEffect} from 'react';
import { Table, } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {getUser} from '../actions/userAction'
import Forms from './Form';

const UserList = () => {
  const  dispatch = useDispatch()
    useEffect(() => {
    dispatch(getUser())
    },[])
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


export default UserList;