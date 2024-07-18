import React from "react"
import { Container } from "react-bootstrap"
import "../styles/Ecosystem.css"

const EcoSystem: React.FC = () => {
  return (
    <div className="header">
      <Container>
        <p className="Eco-system">EcoSystem</p>
        <p className="heading">How does a smart street light ecosystem work?</p>
        <div className="content">
          <div className="item-1">
            <div className="Street-Light-Controller-1  ">
              <div className="border-dashed w-100 h-100">
                <img
                  src="assets/street_light_controler.png"
                  alt="street_light_controler"
                  height={40}
                  width={37}
                  className="street_light_controler border-1 w-100 h-100 p-3"
                />
              </div>
              <div className="border-dashed w-100 h-100">
                <img
                  src="assets/street_light_controler.png"
                  alt="street_light_controler"
                  height={40}
                  width={37}
                  className="street_light_controler border-1 w-100 h-100 p-3"
                />
              </div>
            </div>
            <div className="fw-bold text-center">
              Street Light Controller
              <p className="fw-normal pt-2 ">
                Activates/deactivates in response to motion/light sensing and
                controls the brightness of the street lamp
              </p>
            </div>
          </div>

          <div className="horizontal"></div>

          <div className="item-1">
            <div className="Street-Light-Controller-1  ">
              <div className="border-dashed w-100 h-100">
                <img
                  src="assets/gateway_png.png"
                  alt="street_light_controler"
                  height={40}
                  width={37}
                  className="street_light_controler border-1 w-100 h-100 p-2 bg-secondary-subtle"
                />
              </div>
            </div>
            <div className="fw-bold text-center">
              Gateway
              <p className="fw-normal pt-2">
                Employed for interfacing between a Controller and the Lighting
                Management Software.p
              </p>
            </div>
            <div className="vertical"></div>
            <div className="horizontal-1"></div>
            <div className="second-row">
              <div className="item-1">
                <div className="small-vertical "></div>
                <div className="Street-Light-Controller-1  ">
                  <div className="border-dashed w-100 h-100">
                    <img
                      src="assets/users_png.png"
                      alt="street_light_controler"
                      height={40}
                      width={37}
                      className="street_light_controler border-1 w-100 h-100 px-3 py-2"
                    />
                  </div>
                </div>
                <div className="fw-bold text-center">
                  Users
                  <p className="fw-normal pt-2">
                    Data from the cloud is used to monitor and control street
                    lights by the System Managers.
                  </p>
                </div>
              </div>
              <div className="item-1">
                <div className="small-vertical"></div>
                <div className="Street-Light-Controller-1  ">
                  <div className="border-dashed w-100 h-100">
                    <img
                      src="assets/evaluation_png.png"
                      alt="street_light_controler"
                      height={40}
                      width={37}
                      className="street_light_controler border-1 w-100 h-100 p-2"
                    />
                  </div>
                </div>
                <div className="fw-bold text-center">
                  Evaluation
                  <p className="fw-normal pt-2">
                    Gathered insights are used to evaluate the performance of
                    the lighting systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="horizontal"></div>

          <div className="item-1">
            <div className="Street-Light-Controller-1  ">
              <div className="border-dashed w-100 h-100">
                <img
                  src="assets/cloud_based management.png"
                  alt="street_light_controler"
                  height={40}
                  width={37}
                  className="street_light_controler border-1 w-100 h-100 p-1"
                />
              </div>
            </div>
            <div className="fw-bold text-center">
              Cloud-based Management System
              <p className="fw-normal pt-2">
                Collects information from multiple gateways.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default EcoSystem
