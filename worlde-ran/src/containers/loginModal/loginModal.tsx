import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const LoginForm = (props: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    props.close();
  };

  return (
    <Modal show={props.show} onHide={close} backdrop="static" keyboard={false}>
      <Modal.Header closeButton className="p-5 pb-4 border-bottom-0">
        <h1 className="fw-bold mb-0 fs-2">Sign up for free</h1>
      </Modal.Header>
      <Modal.Body className="p-5 pt-0">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder="name@example.com"
              className="rounded-3"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              placeholder="Password"
              className="rounded-3"
            />
          </Form.Group>
          <Button
            variant="primary"
            className="w-100 mb-2 btn btn-lg rounded-3"
            type="submit"
          >
            Sign up
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;
