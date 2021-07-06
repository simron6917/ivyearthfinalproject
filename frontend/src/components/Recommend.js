import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {Col, Card, Container} from 'react-bootstrap'
import Rating from "../components/Rating"
import Header from '../components/Header'


const Recommend = () => {
  const { recommend } = useSelector((state) => state.recommend);
  console.log(recommend);

  return (
      <>
      <Header/>
      <Container className="p-3">
      <Link className='btn btn-light my-3' to='/home'>
        Go Back
      </Link>
    
    {recommend.map((product) => (
              <Col key={product.Plant_Id} sm={12} md={6} lg={4} xl={3}>
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
              </Col>
            ))}
      {/* {recommend.map((item, index) => {
        return <div key={index}>{item}</div>;
      })} */}
    
    </Container>
    </>
  );
};

export default Recommend;
