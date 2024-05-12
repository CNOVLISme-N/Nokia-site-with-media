import React from 'react'
import './Container.css'
import { container } from '../../static/Index'
import { container2 } from '../../static/Index'
import img1 from '../assets/container/car-assembly.png.webp'
import img2 from '../assets/container/energy-header.png.webp'
import img3 from '../assets/container/header-option1-1920x600.jpg.webp'
import img4 from '../assets/container/healthcare_subpage.jpg.webp'
import img5 from '../assets/container/nokia-financial-services.jpg.webp'
import img6 from '../assets/container/public-sector.png.webp'
import { FaArrowRightLong } from "react-icons/fa6";



function Container() {
  return (
    <div className='container'>
      {
        container.map((item, index) => {
          return (
            <h1>{item}</h1>
          )
        })
      }

      {
        container2.map((item, index) => {
          return (
            <p>{item}</p>
          )
        })
      }

      <div className="container__child">
        <div className="child">
          <div className="child__one">
            <img src={img4} alt="" />
            <span>Healthcare<i><FaArrowRightLong /></i></span>
          </div>

          <div className="child__one">
            <img src={img1} alt="" />
            <span>Manufacturing <i><FaArrowRightLong /></i></span>
          </div>

          <div className="child__one">
            <img src={img3} alt="" />
            <span>Research<i><FaArrowRightLong /></i></span>
          </div>

        </div>

        <div className="child">
          <div className="child__one">
            <img src={img2} alt="" />
            <span>Energy<i><FaArrowRightLong /></i></span>
          </div>

          <div className="child__one">
            <img src={img5} alt="" />
            <span>Financial<i><FaArrowRightLong /></i></span>
          </div>

          <div className="child__one">
            <img src={img6} alt="" />
            <span>Public<i><FaArrowRightLong /></i></span>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Container