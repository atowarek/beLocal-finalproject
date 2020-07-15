import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const OurNavbar = props => {
  //const [loggedIn, setLoggedIn] = useState(false)
  // const [sessionToken, setSessionToken] = useState(null)

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   setSessionToken(token)
  // }, [])

  // const logout = () => {
  //   setSessionToken(null)
  //   localStorage.clear()
  // }

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Home Page</NavbarBrand>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink href='/about'> How it works</NavLink>
          </NavItem>
        </Nav>
        <Nav>
          {props.sessionToken ? (
            <Nav>
              <NavLink href='/dashboard'>Profile</NavLink>
              <NavLink href='/' onClick={props.logout()}>
                Logout
              </NavLink>
            </Nav>
          ) : (
            <Nav>
              <NavLink href='/signup'>Signup</NavLink>
              <NavLink href='/login'>Login</NavLink>
            </Nav>
          )}
        </Nav>
      </Navbar>
    </div>
  )
}

export default OurNavbar
