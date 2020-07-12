import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button, 
  Modal
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
      loggedIn: false
    }

  }

  componentWillMount() {
    if (
      localStorage.getItem("token") !== null
    ) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
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
            </Nav>
            
            {this.state.loggedIn ? (
              <NavItem>
                <NavLink href="/dashboard">Profile</NavLink>
                <Button onClick={() => this.props.clickLogout()}>Logout</Button>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink href='/signup'>Signup</NavLink>
                <NavLink href='/login'>Login</NavLink>
              </NavItem>
            )}
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
  

export default OurNavbar
