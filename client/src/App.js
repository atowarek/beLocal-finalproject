import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import OurNavbar from './components/navbar'
import HomePage from './components/home-page'
import About from './components/about'
import Login from './components/login'
import Signup from './components/form-signup'
import Dashboard from './components/dashboard'
import NewActivity from './components/form-new-activity'
import Terms from './components/terms-and-conditions'
import Contact from './components/contact-us'

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const handleLogin = token => {
    if (!token) return
    localStorage.setItem('token', token)

    setLoggedIn(true)
  }

  const handleLogout = () => () => {
    setLoggedIn(false)
    localStorage.clear()
  }

  return (
    <div className='App'>
      <Router>
        <OurNavbar isLoggedIn={isLoggedIn} logout={handleLogout} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route
            exact
            path='/login'
            component={props => (
              <Login {...props} onLogin={handleLogin} />
            )}></Route>
          <Route exact path='/activity' component={NewActivity}></Route>
          <Route exact path='/dashboard' component={Dashboard}></Route>
          <Route exact path='/terms' component={Terms}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          {/* <BottomNavbar /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
