import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand, Nav, NavLink } from 'reactstrap'
import './navbar.css'
import { Link } from 'react-router-dom'

const OurNavbar = props => {
  return (
    <div>
      <Navbar color='white' className='navbar' light expand='md'>
        <NavbarBrand>
          <NavLink tag={Link} exact activeClassName='active-page' to='/'>
            <img src='/img/logo2.jpg' alt='image' style={{ width: 200 }} />
          </NavLink>
        </NavbarBrand>
        <Nav className='mr-auto' navbar>
          <NavLink tag={Link} exact activeClassName='active-page' to='/about'>
            About this project
          </NavLink>
        </Nav>
        <Nav>
          {props.isLoggedIn ? (
            <Nav>
              <NavLink
                tag={Link}
                exact
                activeClassName='active-page'
                to='/dashboard'>
                Profile
              </NavLink>
              <NavLink
                tag={Link}
                exact
                activeClassName='active-page'
                to='/'
                onClick={props.logout()}>
                Logout
              </NavLink>
            </Nav>
          ) : (
            <Nav>
              <NavLink
                tag={Link}
                exact
                activeClassName='active-page'
                to='/signup'>
                Signup
              </NavLink>
              <NavLink
                tag={Link}
                exact
                activeClassName='active-page'
                to='/login'>
                Login
              </NavLink>
            </Nav>
          )}
        </Nav>
      </Navbar>
    </div>
  )
}

export default OurNavbar
