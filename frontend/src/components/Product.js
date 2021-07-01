import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  console.log(product);
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product.name}`}>
        <Card.Img src={product.image} variant='top' className="card-img" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product.name}`}>
          <Card.Title as='div'>
            <strong>{product.name.toUpperCase()}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
      </Card.Body>
    </Card>
    
  )
}

export default Product
