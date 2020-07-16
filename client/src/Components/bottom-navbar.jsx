import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'


class BottomNavbar extends React.Component {
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
          <Navbar className='container-fluid text-center'  color='light' light expand='md'>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='mr-auto' navbar>
                <NavItem>
                  <NavLink href='/about'> About us</NavLink>
                </NavItem>
              </Nav>
              <Nav className='mr-auto' navbar>
                <NavItem>
                  <NavLink href='/terms'> Terms and conditions</NavLink>
                </NavItem>
              </Nav>
              <Nav className='mr-auto' navbar>
                <NavItem>
                  <NavLink href='/contact'> Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )
    }
  }
  
  export default BottomNavbar
  