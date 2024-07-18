import React from "react"
import "../styles/Footer.css"

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <img src="/assets/smart lights_logo.svg" alt="Smart Lights" />

        <div className="footer-links">
          <a href="/product">Product</a>
          <a href="/services">Software Services</a>
          <a href="/follow">Follow Us</a>
        </div>
      </div>
      <div className="underline-span">
        ________________________________________________________________________________________________
      </div>
      <div className="footer-bottom">
        <a href="/privacy">Privacy Policy</a>
        <span>|</span>
        <a href="/terms">Terms & Conditions</a>
        <span>|</span>
        <a href="/cookie">Cookie Policy</a>
      </div>
    </div>
  )
}

export default Footer
