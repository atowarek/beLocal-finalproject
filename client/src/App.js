import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import OurNavbar from './Components/navbar'
import HomePage from './Components/home-page'
import About from './Components/about'
import Login from './Components/login'
import Signup from './Components/form-signup'
import Dashboard from './Components/dashboard'
import NewActivity from './Components/form-new-activity'
import Terms from './Components/terms-and-conditions'
import BottomNavbar from './Components/bottom-navbar'
import Contact from './Components/contact-us'


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
                <Route exact path='/terms' component={Terms}></Route>
            <Route exact path='/contact' component={Contact}></Route>
                  <BottomNavbar/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
