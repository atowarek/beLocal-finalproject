import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import './login.css'
import BottomNavbar from './bottom-navbar'

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
        this.props.onLogin(response.data.token)
        this.setState({ loggedIn: true })
        this.dashboardRedirect()
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

  dashboardRedirect = () => {
    this.props.history.push('/dashboard')
  }

  render() {
    const { name, password, error, loggedIn } = this.state
    return (
      <div className='login'>
        <br />
        <br />
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
          </div>
        ) : (
          <Form className='login-container' onSubmit={this.login}>
            <FormGroup>
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
            <br></br>
            <FormGroup>
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
            <Button color='secondary' size='lg' disabled={!name || !password}>
              Log in
            </Button>
            <hr />
            <Link to='/signup'>Don't have an account? Sign up.</Link>
          </Form>
        )}
        <footer className='page-footer fixed-bottom'>
          <BottomNavbar />
        </footer>
      </div>
    )
  }
}

export default Login
