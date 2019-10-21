import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button,Form } from 'react-bootstrap';


class Forms extends Component {
    state = {
        FirstName: '',
        LastName: '',
        Birthday: new Date(),
        Age: '',
        Hobby: ''
		}
		
		handleChange = (e) => {
		console.log(typeof e)
		this.setState({
		Birthday: e
		})
							}
    handelSubmite  =(e) =>{
        e.preventDefault()
        const { FirstName, LastName, Age, Hobby, Birthday } = this.state;
        
        //create user object
        const newUser = {
            FirstName,
            LastName,
            Birthday,
            Age,
            Hobby
        }
        //Attempt to addNewUser
        this.props.addUser(newUser)
    }
    
    handelChange= (e) => {
    this.setState({
    [e.target.name] : e.target.value
    })
    }

    render() { 
      return ( 
     <Form onSubmit={this.handelSubmite}>
              {/*FirstName input  */}

      <Form.Group>
      <Form.Label>FirstName</Form.Label>
      <Form.Control
        name="FirstName"
        id="FirstName"
        onChange={this.handelChange}
        />
        </Form.Group>
              
              {/* LastName input */}
      <Form.Group>
      <Form.Label>LastName</Form.Label>
      <Form.Control
         name="LastName"
         id="LastName"
         onChange={this.handelChange}
       />
      </Form.Group>

          {/* Birthday */}
       <Form.Group>
        <Form.Label>Birthday</Form.Label>
    {/*Calender Component using React-Calender  */}
        <Calendar
          onChange={this.handleChange}
          value={this.state.Birthday}
          selected={this.state.Birthday}
          />
      </Form.Group>
               
    {/*Age Input  */}
    <Form.Group>
    <Form.Label>Age</Form.Label>
    <Form.Control
       type='number'
       name="Age"
       id="Age"
       onChange={this.handelChange}   
       />
    </Form.Group>
              
         {/* Hobby Input */}
    <Form.Group>
    <Form.Label>Hobby</Form.Label>
    <Form.Control
       name="Hobby"
       id="Hobby"
       onChange={this.handelChange}
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
}
 
export default Forms;