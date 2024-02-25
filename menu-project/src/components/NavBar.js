import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = ({ filterbySearch }) => {
  const [searchValue, setSeartchValue] = useState('')
  const onSearch = () => {
    filterbySearch(searchValue)
    setSeartchValue('')
  }
  return (
    <Row>
        <Navbar expand="lg" bg="dark" variant='dark'>
        <Container>
            <Navbar.Brand href="#">New Food</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="text"
                placeholder="Search"
                className="mx-2"
                onChange={(e) => setSeartchValue(e.target.value)}
                value={searchValue}
                />
                <Button onClick={() => onSearch()} variant="outline-info">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </Row>
  )
}

export default NavBar
