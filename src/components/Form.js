import React,{useState} from 'react';
import Calendar from 'react-calendar';
import { Button,Form } from 'react-bootstrap';
import { connect} from 'react-redux'
import {addUser} from '../actions/userAction'

const Forms = ({addUser}) => {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Birthday, setBirthday] = useState(new Date());
    const [Age, setAge] = useState('');
    const [Hobby, setHobby] = useState('');
    
    const handleChange = e => {
        // console.log(typeof e)
        setBirthday(e)
    }
    const handelChange = e => {
        setFirstName(e.target.value)
        setLastName(e.target.value)
        
        setAge(e.target.value)
        setHobby(e.target.value)
     }

    const handelSubmite = e => {
        e.preventDefault()

        const newUser = {
            FirstName,
            LastName,
            Birthday,
            Age,
            Hobby
    }
        addUser(newUser)
        setFirstName('');
        setLastName('');
        setBirthday(new Date());
        setAge('');
        setHobby('');
     }
    return ( 
        <Form onSubmit={handelSubmite}>
        {/*FirstName input  */}

<Form.Group>
<Form.Label>FirstName</Form.Label>
<Form.Control
  name="FirstName"
  id="FirstName"
onChange={handelChange}
    value={FirstName}
   required     
  />
  </Form.Group>
        
        {/* LastName input */}
<Form.Group>
<Form.Label>LastName</Form.Label>
<Form.Control
   name="LastName"
   id="LastName"
   onChange={handelChange}
   value={LastName}
   required
        
 />
</Form.Group>

    {/* Birthday */}
 <Form.Group>
  <Form.Label>Birthday</Form.Label>
{/*Calender Component using React-Calender  */}
  <Calendar
    onChange={handleChange}
    value={Birthday}
    selected={Birthday}
    />
</Form.Group>
         
{/*Age Input  */}
<Form.Group>
<Form.Label>Age</Form.Label>
<Form.Control
 type='number'
 name="Age"
 id="Age"
 onChange={handelChange}
  value={Age}            
 required
 />
</Form.Group>
        
   {/* Hobby Input */}
<Form.Group>
<Form.Label>Hobby</Form.Label>
<Form.Control
   name="Hobby"
   id="Hobby"
  onChange={handelChange}
  value={Hobby}
  required
 />
</Form.Group>
    
<Button
type="submit"
color='dark'
block
>
Create A New User
</Button>
        
</Form>
     );
}
 


export default connect(null,{addUser})(Forms)