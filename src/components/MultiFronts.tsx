import React from "react"
import "../styles/MultiFronts.css"

const MultipleFronts: React.FC = () => {
  return (
    <div className="main">
      <div className="Heading">
        <p className="w-75 fs-3 fw-normal text-center">
          The platform assists city managers on multiple fronts
        </p>
        <div className="banner-1">
          <div className="item g-2 p-3 border-end  border-bottom w-100">
            <img
              src="/assets/MultiFronts.png"
              alt="icon_1"
              height={74}
              width={74}
            />
            <p className="fs-6 py-4 w-25">
              Saves on power consumption & related costs
            </p>
          </div>
          <div className="item g-2 w-75 p-3 border-bottom ">
            <img
              src="/assets/MultiFronts.png"
              alt="icon_1"
              height={74}
              width={74}
            />
            <p className="fs-6 py-4">Lowers downtimes</p>
          </div>
          <div className="item g-2 border-end  border-bottom ">
            <img
              src="/assets/MultiFronts.png"
              alt="icon_1"
              height={74}
              width={74}
            />
            <p className="fs-6 py-4">Detects power thefts.</p>
          </div>
          <div className="item g-2 w-75 border-bottom ">
            <img
              src="/assets/MultiFronts.png"
              alt="icon_1"
              height={74}
              width={74}
            />
            <p className="fs-6 py-4 w-50">
              Ensures smart monitoring and control of the street light
              infrastructure.
            </p>
          </div>
          <div className="item g-2 w-100 p-3 border-end  border-bottom ">
            <img
              src="/assets/MultiFronts.png"
              alt="icon_1"
              height={74}
              width={74}
            />
            <p className="fs-6 py-4 w-25">
              Ensures real-time actionable analytics on power failures, lamp
              malfunctions, voltage failures, etc
            </p>
          </div>
          <div className="item g-2 w-75 p-3">
            <img
              src="/assets/MultiFronts.png"
              alt="icon_1"
              height={74}
              width={74}
            />
            <p className="fs-6 py-4 w-">Ensures security in the neighborhood</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultipleFronts
