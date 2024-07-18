import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer"
import Products from "./components/Products"
import HeroSection from "./components/HeroSection"
import EcoSystem from "./components/Ecosystem"
import MultipleFronts from "./components/MultiFronts"

const App: React.FC = () => {
  return (
    <div className="App" style={{ flexDirection: "column" }}>
      <HeroSection />
      <EcoSystem />
      <Products />
      <MultipleFronts />
      <Footer />
    </div>
  )
}

export default App
