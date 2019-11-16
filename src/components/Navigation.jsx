import React, { Component } from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="md">
                <Navbar.Brand href="/">MooviesLib</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/add">Add moovie</Nav.Link>
                        <Nav.Link href="/sorted">A-Z list</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;