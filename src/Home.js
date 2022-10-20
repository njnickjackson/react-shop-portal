import React from "react";
import { Container, Nav, Navbar, Stack, Form, Image } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Home() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container >
            <Nav>
                <Image src={require('./images/rubiks-cube.png')} height="32" roundedCircle />
                <Navbar.Text className="ms-3">Riverside Components</Navbar.Text>
            </Nav>
            <Nav>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="about" className="nav-link">About Us</Link>
              <Link to="products" className="nav-link">View All</Link>
              <Link to="add" className="nav-link">Create</Link>
              <Form>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="ms-2"
                    aria-label="Search"
                  />
              </Form>
            </Nav>
          </Container>
        </Navbar>
        <Stack gap={3} className="col-md-10 mx-auto mt-3">
          <Outlet />
        </Stack>
      </>
    )
}

export default Home