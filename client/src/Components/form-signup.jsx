import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import BottomNavbar from './bottom-navbar'

class Signup extends React.Component {
    state= {
        name: '',
        mail: '',
        confirmEmail:'',
        phone: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }


    handleSubmit = event => {
        event.preventDefault()
        const {name, mail, phone, password, confirmEmail} = this.state
        if(mail !== confirmEmail) {
            alert(`Email don't match, please enter again your email address`)
        }else{
        axios('http://localhost:5000/users', {
            method: 'POST',
            data: {
                name,
                mail,
                phone,
                password,
            },
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
        }

    }

    render() {
        const {name, mail, confirmEmail, phone, password} = this.state
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='name'>
                            Let's start with your username.
                        </Label>
                        <Input 
                            value={name}
                            onChange={this.handleChange}
                            name='name'
                            placeholder='Name'
                            type='text'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>
                            What email address can we reach you at? This is only to get in touch, not to send spam.
                        </Label>
                        <Input
                            value={mail}
                            onChange={this.handleChange}
                            name='mail'
                            placeholder='Mail'
                            type='email'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>
                            Can you repeat it? Let's check we didn't get it wrong.
                        </Label>
                        <Input
                            value={confirmEmail}
                            onChange={this.handleChange}
                            name='confirmEmail'
                            placeholder='Confirm email'
                            type='email'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='phone'>
                            Lastly, {name}, can you tell us your phone?
                        </Label>
                        <Input
                            value={phone}
                            onChange={this.handleChange}
                            name='phone'
                            placeholder='Phone'
                            type='tel'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>
                            Can you think of a super awesome password?
                        </Label>
                        <Input
                            value={password}
                            onChange={this.handleChange}
                            name='password'
                            placeholder='Password'
                            type='password'>
                        </Input>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" required/>{' '}
                        You need to agree with the Terms and Conditions
                        </Label>
                    </FormGroup>
                    <Button
                        className='button'>
                        Sign up
                    </Button>
                </Form>
                <footer className='page-footer fixed-bottom'>
                    <BottomNavbar/>
                </footer>
            </div>
        )
    }
}

export default Signup;