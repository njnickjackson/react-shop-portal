import React, {useContext} from 'react';
import { Col, Row, Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import './css/SampleItems.css';

function ViewAll(props) {
    let { deleteProduct } = useContext(ProductContext)

    function handleDeleteProduct(id) {
      deleteProduct(id)
    }

    function sampleList(products) {
      if (products === null) return
      return products.map((product) => 
      <Col md={4}>
        <Card className='m-2'>
                <Card.Body>
                    <Card.Img className='sample-images' src={require(`${product.imageUrl}`)} />
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><strong>Price:</strong> <span>{`$${product.price}`}</span></Card.Subtitle>
                    <div className='buttons'>
                        <Link className="btn btn-secondary">View</Link>
                        <Link to={`../edit/${product.id}`} className="btn btn-primary mx-3">Edit</Link>
                        <Button className='custom-btn' variant="danger" onClick={handleDeleteProduct.bind(this, product.id)}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
      </Col>
      )
    }
  
    return (
      <>
      <h1>Products</h1>
      <Row>
        <CardGroup>
            <ProductContext.Consumer>
                {({products}) => (
                sampleList(products)
                )}
            </ProductContext.Consumer>
        </CardGroup>
      </Row>
      
      </>
    )
  }
  
  export default ViewAll