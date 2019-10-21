import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "react-datepicker/dist/react-datepicker.css";
import { Button,Form } from 'react-bootstrap';

// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import {SingleDatePicker} from 'react-dates';



class Forms extends Component {
    state = {
        FirstName: '',
        LastName: '',
        Birthday: '',
        Age: '',
        Hobby: ''
    }
    
    handelSubmite  =(e) =>{
        e.preventDefault()
        const {FirstName,LastName,Age,Hobby, Birthday} = this.state;

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
                <Form.Group>
                    <Form.Label>FirstName</Form.Label>
                  <Form.Control
                    name="FirstName"
                    id="FirstName"
                    onChange={this.handelChange}
                   
                        
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>LastName</Form.Label>
                  <Form.Control
                    name="LastName"
                    id="LastName"
                    onChange={this.handelChange}
                   
                        
                    />
                </Form.Group>


                <Form.Group>
                    <Form.Label>Birthday</Form.Label>
                   
                    <DatePicker selected={this.state.Birthday} onChange={this.handleChange} />
                  
        
                </Form.Group>
               
                {/* <div className="form-group">
                    <label>Birthday</label>
                    <input
                        type='date'
                    name="Birthday"
                    id="birthday"
                    onChange={this.handelChange}
                   className="form-control"    
                        
                    />
                    </div> */}
                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type='number'
                    name="Age"
                    id="Age"
                    onChange={this.handelChange}
                   className="form-control"    
                        
                    />
                    </Form.Group>
                     <Form.Group>
                    <Form.Label>Hobby</Form.Label>
                  <Form.Control
                    name="Hobby"
                    id="Hobby"
                    onChange={this.handelChange}
                   className="form-control"    
                        
                    />
                </Form.Group>
          
                   
                <Button type="submit" class="btn btn-primary d-block">Add New User </Button>
                
             </Form>
         );
    }
}
 
export default Forms;