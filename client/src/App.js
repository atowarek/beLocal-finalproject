import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import OurNavbar from './components/navbar'
import HomePage from './components/home-page'
import About from './components/about'
import Login from './components/login'
import Signup from './components/form-signup'
import Dashboard from './components/dashboard'
import NewActivity from './components/form-new-activity'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      sessionToken: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token')
    if(token && !this.state.sessionToken) {
      this.setState({ sessionToken: token })
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token)
    this.setState({ sessionToken: token})
  }

  logout = () => {
    this.setState({ 
      sessionToken: '', 
    });
    localStorage.clear();
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <OurNavbar clickLogout={this.logout}/>
          <Switch>
            <Route
              exact
              path='/'
              component={HomePage}
              addActivity={this.addSelectedActivity}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/signup' component={Signup}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/activity' component={NewActivity}></Route>
            <Route exact path='/dashboard' component={Dashboard}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
