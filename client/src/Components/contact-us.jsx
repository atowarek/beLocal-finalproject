import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import BottomNavbar from './bottom-navbar'

class Contact extends React.Component {
    state = {
        name: '',
        mail: '',
        message: ''
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    render () {
        const { name, mail, message} = this.state
        return (
            <div>
            <Form>
                <FormGroup>
                    <Label for='name'>
                        Let's start with your name.
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
                    <Label for='mail'>
                        What e-mail address can we reach you at?
                    </Label>
                    <Input 
                        value={mail}
                        onChange={this.handleChange}
                        name='mail '
                        placeholder='Mail'
                        type='text'>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for='message'>
                        How can we help you?
                    </Label>
                    <Input 
                        value={message}
                        onChange={this.handleChange}
                        name='message'
                        placeholder='Message'
                        type='textarea'>
                    </Input>
                </FormGroup>
                <Button
                    className='button'>
                    Contact us!
                </Button>
            </Form>
            <footer className='page-footer fixed-bottom'>
            <BottomNavbar/>
          </footer>
          </div>
        )
    }
}

export default Contact