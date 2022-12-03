import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./loginn.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {};

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          {<Form.Label>Email address</Form.Label>}
          <Form.Control
            placeholder={"Email address"}
            value={formData.email}
            name="email"
            onChange={handleFieldChange}
            type="email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          {<Form.Label>Password</Form.Label>}
          <Form.Control
            placeholder={"Password"}
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            type="password"
            required
          />
        </Form.Group>{" "}
        {/* <PhoneInput
            className="mb-3 custom-input"
            country={'us'}
            value={phoneValue}
            onChange={phone => setPhoneValue(phone)}
          /> */}
        <Row className="justify-content-between align-items-center mb-2">
          <Col xs="auto">
            <Form.Check type="checkbox" id="rememberMe" className="mb-0">
              <Form.Check.Input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    remember: e.target.checked,
                  })
                }
              />
              <Form.Check.Label className="mb-0 text-700">
                Remember me
              </Form.Check.Label>
            </Form.Check>
          </Col>
        </Row>
        <Form.Group className="mb-4">
          <Button variant="primary" type="submit" className="px-4 mx-0">
            Save
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
