import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import OurNavbar from './components/navbar'
import HomePage from './components/home-page'
import About from './components/about'
import Login from './components/login'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <OurNavbar />
          <Switch>
            <Route exact path='/' children={HomePage}></Route>
            <Route exact path='/about' children={About}></Route>
            <Route exact path='/login' children={Login}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
