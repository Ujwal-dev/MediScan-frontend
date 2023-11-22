import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"

function Header() {
  return (
    <header className='header'>
        {/* <Logo></Logo> */}
        <h2 className='header--title'>MEDI-SCAN</h2>
        <div className='drop-down'>
            <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Separated link
                </NavDropdown.Item>
            </NavDropdown>
        </div>
        <span className='header--span'>
            <a href="#">Login</a>
            /
            <a href="#">Register</a>
        </span>
    </header>
  )
}

export default Header