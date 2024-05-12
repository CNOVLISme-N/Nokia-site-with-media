import React from 'react'
import './Box.css'
import { box } from '../../static/Index'
import img1 from '../assets/box/refrence-thumbnail-1920x1080_1.jpg.webp'
import img2 from '../assets/box/OI_Industry_03_LR_RGB.jpg.webp'
import img3 from '../assets/box/resrcid38723_aircraft_engineer_amplifier_16x9.jpg.webp'

function Box() {
  return (
    <div className='box'>
      {
        box.map((item, index) => {
          return (
            <h1>{item}</h1>
          )
        })
      }

      <div className="box__child">
        <div className="childs">
          <img src={img2} alt="" />
          <h1>Solutions for industry</h1>
          <p>Enterprise networking products and solutions for all your needs </p>
        </div>
        <div className="childs">
          <img src={img3} alt="" />
          <h1>Customer case studies</h1>
          <p>Leading organizations trust Nokia for transformative networks</p>
        </div>
        <div className="childs">
          <img src={img1} alt="" />
          <h1>Nokia Partners</h1>
          <p>Bringing together partners and technologies to create advantage</p>
        </div>
      </div>
    </div>
  )
}

export default Box