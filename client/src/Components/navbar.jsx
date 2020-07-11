import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  //NavbarText,
} from 'reactstrap'

class OurNavbar extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }



  render(){
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>Home Page</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='/about'> How it works</NavLink>
              </NavItem>
              <NavItem>
                <Button onClick={() => this.props.clickLogout()}>Logout</Button>
              </NavItem>
            </Nav>
            <NavLink href='/signup'>Signup</NavLink>
            <NavLink href='/login'>Login</NavLink>
            <NavLink href='/dashboard'>Profile</NavLink>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
  

export default OurNavbar
