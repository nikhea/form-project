import React from 'react';
import './App.css';
// import Users from './User';
import { Container } from 'react-bootstrap'
import UserList from './UserList';


const App = () => {
    return (
        <Container>
        <UserList/>
        </Container>
      );
}
 
export default App;