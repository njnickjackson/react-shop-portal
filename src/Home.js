import React, { useContext, useState } from "react";
import { Container, Nav, Navbar, Stack, Form, Image } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ProductContext } from './ProductContext';
import './css/Home.css';

function Home() {
    const [search, setSearch] = useState("")
    let { searchProducts } = useContext(ProductContext)
    let navigate = useNavigate()

    const updateSearch = (event) => {
      setSearch(event.target.value)
    }
    
    const submitSearch = (event) => {
      event.preventDefault()
      searchProducts(search)
      navigate("/searchResults")
    }

    const clearSearch = () => {
      setSearch("")
    }


    return (
        <div className="flex-wrapper">
        <Navbar bg="dark" variant="dark">
          <Container >
            <Nav>
                <Image src={require('./images/rubiks-cube.png')} height="32" roundedCircle />
                <Navbar.Text className="ms-3">Riverside Components</Navbar.Text>
            </Nav>
            <Nav>
              <Link to="/" onClick={clearSearch} className="nav-link">Home</Link>
              <Link to="about" onClick={clearSearch} className="nav-link">About Us</Link>
              <Link to="products" onClick={clearSearch} className="nav-link">View All</Link>
              <Link to="add" onClick={clearSearch} className="nav-link">Create</Link>
              <Form onSubmit={submitSearch}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="ms-2"
                    aria-label="Search"
                    onChange={updateSearch}
                    value={search}
                  />  
              </Form>
            </Nav>
          </Container>
        </Navbar>
        <Stack gap={3} className="col-md-10 mx-auto mt-3">
          <Outlet />
        </Stack>
        <div className="footer bg-dark">Ⓒ 2022 Riverside Components - Powered by Nicholas Jackson</div>
      </div>
    )
}

export default Home