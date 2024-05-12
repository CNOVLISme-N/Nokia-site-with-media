import React from 'react'
import './Main.css'
import { main } from '../../static/Index'

function Main() {
  return (
    <div className='main'>
      {
        main.map((item, index) => {
          return (
            <div className="main__list">
              <p>{item}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Main