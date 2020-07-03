import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  login = event => {
    event.preventDefault()
    const { name, password } = this.state
    axios('http://localhost:5000/login', {
      method: 'POST',
      data: {
        name,
        password,
      },
    })
      .then(response => {
        localStorage.setItem('token', response.data.token)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  requestAccess = () => {
    axios('http://localhost:5000/profile', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { name, password } = this.state
    return (
      <div>
        <div>
          <Form inline>
            <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
              <Label for='name' className='mr-sm-2'>
                Name
              </Label>
              <Input
                value={name}
                onChange={this.handleChange}
                name='name'
                placeholder='Name'
                type='text'
                className='form-name'
              />
            </FormGroup>
            <FormGroup>
              <Label for='password' className='mr-sm-2'>
                Password
              </Label>
              <Input
                value={password}
                onChange={this.handleChange}
                name='password'
                placeholder='Password'
                type='password'
                className='form-password'
              />
            </FormGroup>
            <Button
              className='button'
              onClick={this.login}
              disabled={!name || !password}>
              Log in
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Login
