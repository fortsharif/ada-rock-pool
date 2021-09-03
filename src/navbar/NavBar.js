import React, { useEffect, useState } from 'react'
import { Card, Button, ListGroup, ListGroupItem, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const NavBar = (props) => {


    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#">ADA Rock Pool</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="ms-auto">

                    <Nav.Link href="/" >
                        Home
                    </Nav.Link>
                    <Nav.Link >
                        About
                    </Nav.Link>
                    <Nav.Link >
                        Delegate
                    </Nav.Link>


                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default withRouter(NavBar)