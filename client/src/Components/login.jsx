import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      error: false,
      loggedIn: false,
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
        this.setState({ loggedIn: true })
        console.log(response.data)
      })
      .catch(error => {
        this.setState({ error: true })
        console.log(error)
      })
    this.setState({
      name: '',
      password: '',
      error: false,
    })
  }

  homeRedirect = () => {
    this.props.history.push('/')
  }

  dashboardRedirect = () => {
    this.props.history.push('/dashboard')
  }

  render() {
    const { name, password, error, loggedIn } = this.state
    return (
      <div>
        {error && (
          <Alert color='primary'>
            Sorry, name or password are incorrect! Try again, or sign up!
          </Alert>
        )}
        {loggedIn ? (
          <div>
            <h2>
              You are now logged in! <br />
              Check your profile or search for activities
            </h2>
            {/* buttton to profile not working here */}
            <Button color='success' onClick={this.dashboardRedirect}>
              Profile
            </Button>
            <Button color='primary' onClick={this.homeRedirect}>
              Activities
            </Button>
          </div>
        ) : (
          <Form>
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
                required='required'
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
                required='required'
              />
            </FormGroup>
            <Button
              className='button'
              onClick={this.login}
              disabled={!name || !password}>
              Log in
            </Button>
            <p>Forgot Password?</p>
            <Link to='/signup'>Don't have an account? Sign up.</Link>
          </Form>
        )}
      </div>
    )
  }
}

export default Login
