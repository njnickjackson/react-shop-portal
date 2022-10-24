import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Search() {
    let { deleteProduct, searchResults } = useContext(ProductContext)
    let navigate = useNavigate()

    function handleDeleteProduct(id) {
      deleteProduct(id)
      navigate("/products")
    }

    const searches = Object.keys(searchResults).map((product, i) => 
    <Col md={4}>
      <Card className='m-2'>
              <Card.Body>
                  <Card.Img className='sample-images' src={searchResults[product].imageUrl} />
                  <Card.Title>{searchResults[product].productName}</Card.Title>
                  <Card.Text className="mb-2"><strong>Price:</strong> <span>{`$${searchResults[product].price}`}</span></Card.Text>
                  <div className='buttons'>
                      <Link to={`/products/${searchResults[product].id}`} className="btn btn-secondary">View</Link>
                      <Link to={`../edit/${searchResults[product].id}`} className="btn btn-primary mx-3">Edit</Link>
                      <Button className='custom-btn' variant="danger" onClick={handleDeleteProduct.bind(this, searchResults[product].id)}>Delete</Button>
                  </div>
              </Card.Body>
          </Card>
    </Col>
    )
    return (
        <div>
            <h1>Search Results ({Object.keys(searchResults).length})</h1>
            <Row>
                {searches}
            </Row>
        </div>
    )
}

export default Search