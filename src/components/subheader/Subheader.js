import React from 'react'
import './Subheader.css'
import { subHeader } from '../../static/Index'


function Subheader() {
  return (
    <div className='subheader'>
      {
        subHeader.map((item, index) => {
          return (
            <p>{item}</p>
          )
        })
      }
    </div>
  )
}

export default Subheader