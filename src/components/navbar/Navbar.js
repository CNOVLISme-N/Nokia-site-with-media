import React from 'react'
import './Navbar.css'
import img1 from '../assets/navbar/logo (2).svg'
import { navbar } from '../../static/Index'
import { TbWorld } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";


function Navbar() {
  return (
    <div className='navbar'>
      <img src={img1} alt="" />
      <div className="navbar__list">
        {
          navbar.map((item, index) => {
            return (
              <p>{item}</p>
            )
          })
        }
      </div>
      <div className="navbar__icone">
        <i><TbWorld /></i>
        <i><CiSearch /></i>
      </div>
      <i className='navbar__i'><FaBars /></i>
    </div>
  )
}

export default Navbar