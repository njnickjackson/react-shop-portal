import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import './css/SampleItems.css';

function SampleItems(props) {
    function sampleList(products) {
      if (products === null) return
      return products.filter((product, index) => index < 3).map((product) => 
            <Card className='m-2'>
                <Card.Body>
                    <Card.Img className='sample-images' src={require(`${product.imageUrl}`)} />
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><strong>Price:</strong> <span>{`$${product.price}`}</span></Card.Subtitle>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                    <div className='buttons'>
                        <Link className="btn btn-secondary">View</Link>
                        <Link to={`edit/${product.id}`} className="btn btn-primary mx-3">Edit</Link>
                        <Button className='custom-btn' variant="danger">Delete</Button>
                    </div>
                </Card.Body>
            </Card>
      )
    }
  
    return (
      <>
      <h1>Products</h1>
      <CardGroup>
        <ProductContext.Consumer>
            {({products}) => (
            sampleList(products)
            )}
        </ProductContext.Consumer>
      </CardGroup>
      </>
    )
  }
  
  export default SampleItems