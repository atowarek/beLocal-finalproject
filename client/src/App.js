import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import OurNavbar from './components/navbar'
import HomePage from './components/home-page'
import About from './components/about'
import Login from './components/login'
import Signup from './components/form-signup'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <OurNavbar />
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/signup' component={Signup}></Route>
            <Route exact path='/login' component={Login}></Route>
          </Switch>
        </Router>
        {/* <Login /> */}
      </div>
    )
  }
}

export default App
