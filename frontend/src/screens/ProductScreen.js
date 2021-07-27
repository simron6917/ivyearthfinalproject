import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Container,
} from "react-bootstrap";

import Rating from "../components/Rating";
import Message from "../components/Message";
import Header from "../components/Header";

import Loader from "../components/Loader";
import Meta from "../components/Meta";
import {
  listProductDetails,
  createProductReview,
  recommendProducts,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const product_name = match.params.id;
  // console.log(product._id);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
    }
    if (!product.name || product.name !== match.params.id) {
      dispatch(listProductDetails(match.params.id));
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
  }, [dispatch, match, successProductReview]);

  const addToCartHandler = () => {
    history.push(`/bookmark/${match.params.id}?qty=${qty}`);
  };
  const plantRecommend = () => {
    dispatch(recommendProducts(product.name));
    history.push(`/recommend`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(product._id, {
        rating,
        comment,
      })
    );
  };
  // console.log(rating);
  // console.log(comment);

  return (
    <>
      <Header />
      <Container className="py-3">
        <Link className="btn btn-light my-3" to="/home">
          Go Back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
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
                    <b> Description:</b> {product.description}
                  </ListGroup.Item>
                  {/* <ListGroup.Item>
                <br />
<Link to='/product'><Button 
                    
                    className='btn-block' 
                    type='button'>
                        Click here for more flowers ...
                    </Button></Link>
                </ListGroup.Item> */}
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
                        <b>Light: </b>
                        {product.light}
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <b> Height:</b> {product.height}
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <b> Width: </b>
                        {product.width}
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <b> Propagation Medium: </b>
                        {product.propagation}
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <b> Flower Color:</b> {product.flower_color}
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <b> Foliage Color:</b> {product.foliage_color}
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <b> Problem Solvers: </b>
                        {product.problem_solvers}
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
                        className="btn-block"
                        type="button"
                      >
                        Recommend More
                      </Button>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Button
                        onClick={addToCartHandler}
                        className="btn-block"
                        type="button"
                        disabled={product.countInStock === 0}
                      >
                        Save
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <h2>Reviews</h2>
                {product.reviews.length === 0 && <Message>No Reviews</Message>}
                <ListGroup variant="flush">
                  {product.reviews.map((review) => (
                    <ListGroup.Item key={review._id}>
                      <strong>{review.name}</strong>
                      <Rating value={review.rating} />
                      <p>{review.createdAt.substring(0, 10)}</p>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  ))}
                  <ListGroup.Item className="reviews">
                    <h2>Write a Customer Review</h2>
                    {successProductReview && (
                      <Message variant="success">
                        Review submitted successfully
                      </Message>
                    )}
                    {loadingProductReview && <Loader />}
                    {errorProductReview && (
                      <Message variant="danger">{errorProductReview}</Message>
                    )}
                    {userInfo ? (
                      <Form onSubmit={submitHandler}>
                        <Form.Group controlId="rating">
                          <Form.Label>Rating</Form.Label>
                          <Form.Control
                            as="select"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                          >
                            <option value="">Select...</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="comment">
                          <Form.Label>Comment</Form.Label>
                          <Form.Control
                            as="textarea"
                            row="3"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                        <Button
                          disabled={loadingProductReview}
                          type="submit"
                          variant="primary"
                        >
                          Submit
                        </Button>
                      </Form>
                    ) : (
                      <Message>
                        Please <Link to="/login">sign in</Link> to write a
                        review{" "}
                      </Message>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default ProductScreen;
