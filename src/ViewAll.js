import React, {useContext} from 'react';
import { Col, Row, Button, Card, CardGroup } from 'react-bootstrap';
import { Link, Outlet, useParams } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import './css/SampleItems.css';

function ViewAll(props) {
    let params = useParams()
    let { deleteProduct } = useContext(ProductContext)

    function handleDeleteProduct(id) {
      deleteProduct(id)
    }

    function sampleList(products) {
      if (products === null) return
      if (params.productId !== undefined) return
      return products.map((product) => 
      <Col md={4}>
        <Card className='m-2'>
                <Card.Body>
                    <Card.Img className='sample-images' src={product.imageUrl} />
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text className="mb-2"><strong>Price:</strong> <span>{`$${product.price}`}</span></Card.Text>
                    <div className='buttons'>
                        <Link to={`/products/${product.id}`} className="btn btn-secondary">View</Link>
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
      <Outlet />
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