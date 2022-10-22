import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from './ProductContext';
import { useContext } from 'react';
import './css/SampleItems.css';

function ProductDetails(props) {

    let params = useParams()
    let navigate = useNavigate()
  
    let { deleteProduct, getProduct } = useContext(ProductContext)
    let product = getProduct(params.productId)
    if (product ===  undefined) { return <p>Contact Not Found.</p> }
  
    let { id, productName, description, price, imageUrl, condition } = product
  
    function handleDeleteProduct(id) {
      deleteProduct(id)
      navigate('/products')
    }
  
    return (
      <Card className="align-self-start w-25">
        <Card.Body>
          <Card.Img className='sample-images' src={require(`${imageUrl}`)} />
          <Card.Title>{productName}</Card.Title>
          <Card.Text className="mb-2"><strong>Price:</strong> <span>{`$${price}`}</span></Card.Text>
          <Card.Text>
            <strong>Description:</strong> {description}
          </Card.Text>
          <Card.Text>
            <strong>Condition:</strong> {condition}
          </Card.Text>
          <Link to={`../../edit/${id}`} className="btn btn-primary mx-3">Edit</Link>
          <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
        </Card.Body>
    </Card>
    )
  }
  
  export default ProductDetails