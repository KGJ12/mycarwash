import '../../App.css';
import React from 'react'

function navbar() {
  return (
    <div className='container'>
        <div className='logo'>
              <img src="/logo1.png" className='carwash-logo'/>
        </div>
        <ul className='navbar'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Franchise</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
  )
}

export default navbar