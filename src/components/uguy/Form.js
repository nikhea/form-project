import React, { Component } from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap'

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
        //Attempt to register
        this.props.addUser(newUser)
      //   //Close modele
      //   this.toggle()
       
        
    }
    handelChange= (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    
    }

//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//   };
    render() { 
        return ( 
            <Form onSubmit={this.handelSubmite}>
            <FormGroup>
                <Label for='FirstName'>FirstName</Label>
                <Input
                 type='text'
                 name='FirstName'
                 id='FirstName'
                 placeholder='FirstName'
                 className='mb-3'
                //  required
                 onChange={this.handelChange}
                />
                <Label for='LastName'>LastName</Label>
                <Input
                 type='text'
                 name='LastName'
                 id='LastName'
                 placeholder='LastName'
                 className='mb-3'
                //  required
                 onChange={this.handelChange}
                    />
                 
         
        {/* <Label for="Birthday">Birthday</Label>
              <Input
              type="date"
              name="Birthday"
              id="Birthday"
            placeholder="Birthday"
                    /> */}
      
    
                 <Label for='Age'>Age</Label>
                <Input
                 type='number'
                 name='Age'
                 id='Age'
                 placeholder='Age'
                 className='mb-3'
                //  required
                 onChange={this.handelChange}
                    />   
                    
                    <Label for='Hobby'>Hobby</Label>
                <Input
                 type='text'
                 name='Hobby'
                 id='Hobby'
                 placeholder='Hobby'
                 className='mb-3'
                //  required
                 onChange={this.handelChange}
                />
                <Button
                color='dark'
                style={{marginTop:'1rem'}}
                block
                className='mt-3'
                >

                    Submit
                </Button>
            </FormGroup>

            </Form>
         );
    }
}
 
export default Formssss;