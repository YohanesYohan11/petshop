import { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <Container>
      <Row className="justify-content-md-center py-5">
        <Col xs={12} md={6} lg={5} xl={4}>
          <Card className="p-4">
            <h2 className="mb-4 mt-2">Sign In</h2>
            <Form onSubmit={submitHandler} className="d-grid">
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                className="mt-4 rounded-pill px-4 "
                disabled={isLoading}
              >
                Sign In
              </Button>
              {isLoading && <Loader />}
            </Form>

            <Row className="py-3">
              <Col>
                New Customer?{" "}
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : `/register`}
                >
                  Register
                </Link>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
