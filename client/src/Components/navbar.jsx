import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  //Button,
  //Modal,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  //NavbarText,
} from 'reactstrap'

class OurNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      loggedIn: false,
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({ loggedIn: true })
    } else {
      this.setState({ loggedIn: false })
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
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
            </Nav>
            <Nav>
              {this.state.loggedIn ? (
                <Nav>
                  <NavLink href='/dashboard'>Profile</NavLink>
                  <NavLink href='/' onClick={() => this.props.clickLogout()}>
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
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default OurNavbar
