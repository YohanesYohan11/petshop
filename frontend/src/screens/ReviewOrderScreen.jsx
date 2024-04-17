import PageTitle from "../components/PageTitle";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import OrderShipping from "../components/order/OrderShipping";
import OrderPayment from "../components/order/OrderPayment";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ReviewOrderScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);

  const placeOrderHandler = () => {
    // dispatch(createOrder());
    // navigate(`/order/${orderId}`);
  };

  return (
    <>
      <PageTitle title="Review Order" />

      <Row className="py-2">
        <Col md={8}>
          <Card>
            <Card.Header>
              <h4 className="fs-5 fw-bold mb-0 text-black-50">Order Items</h4>
            </Card.Header>
            <Card.Body>
              {cartItems.length > 0 && (
                <ListGroup variant="flush">
                  {cartItems.map((item) => (
                    <ListGroup.Item key={item._id}>
                      <Row>
                        <Col xs={2}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                            width={48}
                          />
                        </Col>
                        <Col xs={5}>
                          <Link
                            to={`/product/${item._id}`}
                            className="text-black"
                          >
                            {item.name}
                          </Link>
                        </Col>
                        <Col xs={5} className="text-end">
                          {item.qty} x ${item.price} = $
                          {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Header>
              <h4 className="fs-5 fw-bold mb-0 text-black-50">
                Shipping Address
              </h4>
            </Card.Header>
            <Card.Body>
              <OrderShipping />
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Header>
              <h4 className="fs-5 fw-bold mb-0 text-black-50">Payment</h4>
            </Card.Header>
            <Card.Body>
              <OrderPayment />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="py-2">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2 className="fs-5 fw-bold text-black-50">
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                  items)
                </h2>
                <span className="fs-5">$ {totalPrice}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block rounded-pill px-4 mt-2"
                  disabled={cartItems.length === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ReviewOrderScreen;
