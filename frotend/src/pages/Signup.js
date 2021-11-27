import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth  } from "../contexts/AuthContext";
import {useHistory } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext"
import { Container } from "react-bootstrap"
import Video from '../assets/videos/video_museum.mp4'
import styled from 'styled-components'
import {Button as Button1} from '../components/Button'
const sign_up = () => {

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        
    <AuthProvider>
      <Signup/>
    </AuthProvider>

      </div>
    </Container>
  )

}


const  Signup = () =>  {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  const descriptionRef = useRef();
  const roleRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    console.log("submit")
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value,
        descriptionRef.current.value,
        roleRef.current.value
      );
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
     <HeroBg>
     <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline/>
     </HeroBg>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={nameRef} required />
            </Form.Group>
            <Form.Group id="description">
              <Form.Label>Description</Form.Label>
              <Form.Control ref={descriptionRef} required />
            </Form.Group>
            <Form.Group id="role">
              <Form.Label>Role</Form.Label>
              <Form.Control ref={roleRef} required />
            </Form.Group>
            <Button primary="true" round="true" className="w-100" type="submit"
            css={`
            background: ${({primary}) => (primary ? '#F26A2E' : '#077BF1')};
            white-space:nowrap;
            text-align: center;
            margin-top: 5%;
            color: #fff;
            font-size: ${({ big }) => (big ? '20px' : '16px')};
            outline: none;
            border: none;
            min-width: 100px;
            cursor: pointer;
            text-decoration: none;
            transition: 0.3s !important;
            border-radius: ${({ round }) => (round ? '50px' : 'none')};

            &:hover {
                background: ${({primary}) => (primary ? '#077BF1' : '#F26A2E')};
                transform: translateY(-2px);

            }
            `}>
              Sign Up
            </Button>
          </Form>
          <div className="w-100 text-center mt-2" >
        Already have an account? 
        <Button1 primary="true" round="true" to="/Login"  css={`
            padding: 5px 35px !important;
            `}>
          Login
        </Button1>
      </div>
        </Card.Body>
      </Card>
     
    </>
  );
}

export default sign_up;

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`