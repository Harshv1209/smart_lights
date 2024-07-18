import React from "react"
import "../styles/Products.css"

const Products: React.FC = () => {
  return (
    <div className="products">
      <div className="inner-layer">
        <div className="tit-layer">
          <div className="title">Products</div>
          <p style={{ fontSize: "2rem" }}>
            <b>Cutting-edge hardware,</b> offerings
          </p>
          <p style={{ fontSize: "2rem" }}>
            helping cities optimize resources and
          </p>
          <p style={{ fontSize: "2rem" }}>achieve smart development goals</p>
        </div>
        <div className="in-lay">
          <div className="pro" style={{ color: "blue" }}>
            Centralized Control & Monitoring System
          </div>
          <div className="pro">Retrofit Street Light Controller VOLC 2160</div>
          <div className="pro">NEMA-Mounted VOLC 1160</div>
          <div className="pro">Retrofit Street Light Controller VOLC 2180</div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 500,
              border: "2px solid rgba(147, 139, 139, 0.358)",
              textAlign: "center",
              width: "250px",
            }}
          >
            Retrofit Street Light Controller VOLC 4180
          </div>
        </div>
        <div></div>
      </div>
      <img
        src="/assets/product-bg.png"
        alt="product"
        className="background-image"
      />
    </div>
  )
}

export default Products
