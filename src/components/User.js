import React from 'react'
import UserList from './UserList';
import Forms from './Form';
import {connect} from 'react-redux'
import {getUser} from '../actions/userAction'


const User = () => {

     
  
    return (
        <div>
          
        </div>
      );
}
 
export default connect(null, {getUser})(User);