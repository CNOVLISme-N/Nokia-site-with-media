import React from 'react'
import './Wrapper.css'
import img1 from '../assets/wrapper/thumbnail_nok2922-smartfactory-1920x1080.jpg.webp'
import { wrapper } from '../../static/Index'
import { wrapper2 } from '../../static/Index'
import { wrapper3 } from '../../static/Index'

function Wrapper() {
  return (
    <div className='wrapper'>
      <div className="wrapper__text">
        {
          wrapper.map((item, index) => {
            return (
              <h1>{item}</h1>
            )
          })
        }
        {
          wrapper2.map((item, index) => {
            return (
              <p>{item}</p>
            )
          })
        }
      </div>
      <div className="wrapper__img">
        <img src={img1} alt="" />
        {
          wrapper3.map((item, index) => {
            return (
              <p>{item}</p>
            )
          })
        }
      </div>
    </div>
  )
}

export default Wrapper