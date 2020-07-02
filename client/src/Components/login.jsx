import React from 'react'
import axios from 'axios'

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
    axios('http://localhost:3001/login', {
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

  requestData = () => {
    axios('http://localhost:3001/profile', {
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
          <input
            value={name}
            onChange={this.handleChange}
            name='name'
            label='name'
            type='text'
            className='form-name'
          />
          <input
            value={password}
            onChange={this.handleChange}
            name='password'
            label='password'
            type='password'
            className='form-password'
          />
          <button
            className='button'
            onClick={this.login}
            disabled={!name || !password}>
            Log in
          </button>
        </div>
      </div>
    )
  }
}

export default Login
