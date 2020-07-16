import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
import './form-signup.css'

class Signup extends React.Component {
  state = {
    name: '',
    mail: '',
    confirmEmail: '',
    phone: '',
    password: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { name, mail, phone, password, confirmEmail } = this.state
    if (mail !== confirmEmail) {
      alert(`Email don't match, please enter again your email address`)
    } else {
      axios('http://localhost:5000/users', {
        method: 'POST',
        data: {
          name,
          mail,
          phone,
          password,
          loggedIn: false,
        },
      })
        .then(response => {
          console.log(response.data)
          this.setState(state => ({
            loggedIn: !state.loggedIn,
          }))
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
  loginRedirect = () => {
    this.props.history.push('/login')
  }

  render() {
    const { name, mail, confirmEmail, phone, password, loggedIn } = this.state
    if (loggedIn) {
      return (
        <div className='sign-alert'>
          <Alert color='success'>
            Welcome to beLocal! <br />
            You can now log in and join or create new activities!
            <br />
            <Button color='primary' onClick={this.loginRedirect}>
              Login
            </Button>
          </Alert>
        </div>
      )
    }
    return (
      <div className='signup'>
        <br />
        <br />
        <Form className='signup-container' onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for='name'>Let's start with your username.</Label>
            <Input
              value={name}
              onChange={this.handleChange}
              name='name'
              placeholder='Name'
              type='text'
              required></Input>
          </FormGroup>
          <FormGroup>
            <Label for='email'>
              What email address can we reach you at? This is only to get in
              touch, not to send spam.
            </Label>
            <Input
              value={mail}
              onChange={this.handleChange}
              name='mail'
              placeholder='Mail'
              type='email'
              required></Input>
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
              type='email'
              required></Input>
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
              type='tel'
              required></Input>
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
              type='password'
              required></Input>
          </FormGroup>
          <Button color='secondary' size='lg'>
            Sign up
          </Button>
        </Form>
      </div>
    )
  }
}

export default Signup
