import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand, Nav, NavLink } from 'reactstrap'
import './navbar.css'

const OurNavbar = props => {
  return (
    <div>
      <Navbar color='white' className='navbar' light expand='md'>
        <NavbarBrand>
          <a href='/'>
            <img src='/img/logo2.jpg' alt='image' style={{ width: 200 }} />
          </a>
        </NavbarBrand>
        <Nav className='mr-auto' navbar>
          <NavLink href='/about'> About this project</NavLink>
        </Nav>
        {/* <div>
          <NavLink exact activeClassName='active-page' to='/about'>
            How it works
          </NavLink>
        </div> */}
        <Nav>
          {props.isLoggedIn ? (
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
