import React,{useState} from 'react';
import Calendar from 'react-calendar';
import { Button,Form } from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { addUser } from '../actions/userAction'
import uuid from 'uuid'

const Forms = () => {
  const dispatch = useDispatch()
  const [id, setUserId] = useState(uuid.v1());
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Birthday, setBirthday] = useState(new Date());
    const [Age, setAge] = useState('');
    const [Hobby, setHobby] = useState('');
    
   
  

    const handelSubmite = e => {
        e.preventDefault()

        const newUser = {
             id,
            FirstName,
            LastName,
            Birthday,
            Age,
            Hobby
    }
      dispatch(addUser(newUser))
      
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
  onChange={e => setFirstName(e.target.value)}
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
   onChange={e => setLastName(e.target.value)}
   value={LastName}
   required
        
 />
</Form.Group>

    {/* Birthday */}
 <Form.Group>
  <Form.Label>Birthday</Form.Label>
{/*Calender Component using React-Calender  */}
  <Calendar
    onChange= { e => setBirthday(e) }
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
 onChange={e => setAge(e.target.value)}
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
   onChange={e => setHobby(e.target.value)}
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
 


export default Forms;