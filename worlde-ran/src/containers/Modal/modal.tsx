import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="p-5 pb-4 border-bottom-0">
          <h1 className="fw-bold mb-0 fs-2">Sign up for free</h1>
        </Modal.Header>
        <Modal.Body className="p-5 pt-0">
          <Form>
            <Form.Group>
              <Form.Label htmlFor="floatingInput">Email address</Form.Label>
              <Form.Control
                type="email"
                id="floatingInput"
                placeholder="name@example.com"
                className="rounded-3"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="floatingPassword">Password</Form.Label>
              <Form.Control
                type="password"
                id="floatingPassword"
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
            <Form.Text className="text-muted">
              By clicking Sign up, you agree to the terms of use.
            </Form.Text>
            <hr className="my-4" />
            <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
            <Button
              variant="outline-dark"
              className="w-100 py-2 mb-2 btn rounded-3"
            >
              <svg className="bi me-1" width="16" height="16">
                <use xlinkHref="#twitter" />
              </svg>
              Sign up with Twitter
            </Button>
            <Button
              variant="outline-primary"
              className="w-100 py-2 mb-2 btn rounded-3"
            >
              <svg className="bi me-1" width="16" height="16">
                <use xlinkHref="#facebook" />
              </svg>
              Sign up with Facebook
            </Button>
            <Button
              variant="outline-secondary"
              className="w-100 py-2 mb-2 btn rounded-3"
            >
              <svg className="bi me-1" width="16" height="16">
                <use xlinkHref="#github" />
              </svg>
              Sign up with GitHub
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
