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

const App = () => {
  const [sessionToken, setSessionToken] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setSessionToken(token)
  }, [])

  const handleLogout = () => () => {
    setSessionToken(null)
    localStorage.clear()
  }

  return (
    <div className='App'>
      <Router>
        <OurNavbar sessionToken={sessionToken} logout={handleLogout} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route
            exact
            path='/activity'
            component={NewActivity}
            //sessionToken={sessionToken}
          ></Route>
          <Route exact path='/dashboard' component={Dashboard}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
