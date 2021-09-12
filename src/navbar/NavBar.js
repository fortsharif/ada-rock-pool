import React, { useEffect, useState } from 'react'
import { Card, Button, ListGroup, ListGroupItem, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import image from './final.png'

const NavBar = (props) => {


    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ backgroundColor: "black" }}>
        <Container>
            <Navbar.Brand href="/#"><img src={image} width={40} height={35}></img> ADARockPool</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="ms-auto">

                    <Nav.Link href="/#" >
                        Home
                    </Nav.Link>
                    <Nav.Link href="/#/about" >
                        About
                    </Nav.Link>
                    <Nav.Link href="/#/delegate">
                        Delegate
                    </Nav.Link>


                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default withRouter(NavBar)