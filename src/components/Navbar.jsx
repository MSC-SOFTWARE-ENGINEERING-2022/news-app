import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const CustomNavbar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  
  return (
    <div>
      <Col md="8" sm="12" className='divNavbar'>
        <Navbar {...args} expand="md">
          <NavbarBrand href="/">
            <img
              alt="logo"
              src="https://reactstrap.netlify.app/logo-white.svg"
              style={{
                height: 40,
                width: 40
              }}
            />
            {/* News-App */}
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className="me-2" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/news">News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contacts">Contacts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </Col>
      <Nav className="me-auto navbarSub">
        <NavItem>
          <NavLink href="/news">News</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/news">News</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contacts">Contacts</NavLink>
        </NavItem>
        </Nav>
    </div>
  ); 
}

export default CustomNavbar;