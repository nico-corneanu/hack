import React, { useRef, useState } from "react"
import { Form, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContext"
import { Container } from "react-bootstrap"
import {Button} from "../components/Button"
import Video from '../assets/videos/video_museum.mp4'
import styled from 'styled-components'

const login_exported = () => {

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        
    <AuthProvider>
      <Login/>
    </AuthProvider>

      </div>
    </Container>
  )

}
const  Login = () =>  {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <HeroBg>
     <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline/>
     </HeroBg>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
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
            <Button primary="true" round="true" className="w-100" type="submit"
            css={`
            margin-top: 5%;
            text-align: center;
            `}
            >
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
          <Button primary="true" round="true" to="/ForgotPassword"  css={`
            padding: 5px 35px !important;
            `}>
          Forgot password
        </Button>
          </div>

          <div className="w-100 text-center mt-2">
        Need an account? 
        <Button primary="true" round="true" to="/Signup"  css={`
            padding: 5px 35px !important;
            margin-left: 5px;
            `}>
          Sign Up
        </Button>
      </div>
        </Card.Body>
      </Card>
     
    </>
  )
}

export default login_exported;

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