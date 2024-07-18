import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "../styles/HeroSection.css"

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <Navbar bg="transparent" variant="dark" fixed="top">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#home">
            <img
              src="/assets/smart lights_logo.svg"
              alt="smart lights"
              height={60}
              width={150}
            />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="custom-nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#products" className="custom-nav-link">
              Products
            </Nav.Link>
            <Nav.Link href="#services" className="custom-nav-link">
              Software Services
            </Nav.Link>
            <Nav.Link
              href="#login"
              className="btn btn-primary text-white bg-primary custom-nav-link"
            >
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="overlay">
        <div style={{ flexDirection: "column" }} className="content move-up">
          <p>Smart Lighting Solutions</p>
          <p className="lead">Bringing A New Perspective To Street Lights</p>
          <p className="lead">And The Cities Of Tomorrow.</p>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
      <img
        src="/assets/Hero_section.png"
        alt="Planet Earth"
        className="background-image"
      />
    </div>
  )
}

export default HeroSection
