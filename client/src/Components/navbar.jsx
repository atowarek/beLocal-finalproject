import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand, Nav, NavLink } from 'reactstrap'
import './navbar.css'
import { Link } from 'react-router-dom'

const OurNavbar = props => {
  return (
    <div>
      <Navbar className='navbar' light expand='md'>
        <NavbarBrand>
          <NavLink tag={Link} exact to='/'>
            <img src='/img/logo2.jpg' alt='image' style={{ width: 200 }} />
          </NavLink>
        </NavbarBrand>
        <Nav className='mr-auto' navbar></Nav>
        <Nav>
          {props.isLoggedIn ? (
            <Nav>
              <NavLink className='link-green' tag={Link} exact to='/dashboard'>
                Profile
              </NavLink>
              <NavLink
                className='link-green'
                tag={Link}
                exact
                to='/'
                onClick={props.logout()}>
                Logout
              </NavLink>
            </Nav>
          ) : (
            <Nav>
              <NavLink className='link-green' tag={Link} exact to='/signup'>
                Signup
              </NavLink>
              <NavLink className='link-green' tag={Link} exact to='/login'>
                Login
              </NavLink>
            </Nav>
          )}
        </Nav>
        <NavLink className='link-green' tag={Link} to='/about'>
          About
        </NavLink>
      </Navbar>
    </div>
  )
}

export default OurNavbar
