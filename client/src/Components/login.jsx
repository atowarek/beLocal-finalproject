import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {

    }

    requestData = () => {

    }

    render() {
        return (
            <div>
                <div>
                    <input
                        value={this.state.name}
                        onChange={this.handleChange}
                        name='name'
                        type='text'
                        className='form-name'
                    />
                    <input
                        value={this.state.password}
                        onChange={this.handleChange}
                        name='password'
                        type='password'
                        className='form-password'
                    />
                    <button className='button' onClick= {this.login}>Log in</button>
                </div>
            </div>
        )
    }
}

Export default Login