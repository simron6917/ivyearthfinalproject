
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form, Container } from 'react-bootstrap'

import Header from '../components/Header'
import Meta from '../components/Meta'
import {
    listProductDetails,
      listRecommendProductDetails,
  recommendProducts,
    } from '../actions/productActions'

const RecommendDetailScreen = ({history,match}) => {
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { product } = productDetails
  // const { recommend } = useSelector((state) => state.recommend);


  const plantRecommend = () => {
    dispatch(recommendProducts(product.name))
    history.push(`/recommend`)
  }

  const addToCartHandler = () => {
    history.push(`/bookmark/${match.params.id}`)
  }

  useEffect(() => {
    if (!product._id || product._id !== match.params.id) {
      dispatch(listRecommendProductDetails(match.params.id))
    }
  }, [dispatch, match])

  // useEffect(() => {
    
  //   if (!recommend._id || recommend._id !== match.params.id) {
  //     dispatch(recommendProducts(match.params.id))
  //   }
  // }, [dispatch, match])

  return (
    <>
      <Header />
      <Container className="py-3">
        <Link className='btn btn-light my-3' to='/home'>
          Go Back
        </Link>
        <Meta title={product.name} />
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />

            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>{product.genus}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>  Description:</b> {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={7}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <b> Plant type:</b> {product.type}
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <b>Light: </b>{product.light}
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <b> Height:</b> {product.height}
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <b> Width: </b>{product.width}
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <b> Propagation Medium: </b>{product.propagation}
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <b>  Flower Color:</b> {product.flower_color}
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <b>  Foliage Color:</b> {product.foliage_color}
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <b> Problem Solvers: </b>{product.problem_solvers}
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <b> Special Features: </b>
                    <p>{product.special_features}</p>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <b>How to Care: </b>
                    <p>{product.care_must_knows}</p>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    onClick={plantRecommend}
                    className='btn-block'
                    type='button'>
                    Recommend More
                  </Button>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className='btn-block'
                    type='button'
                  >
                    Save
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RecommendDetailScreen
