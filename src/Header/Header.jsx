import React from 'react'
import './Header.css'
import logoColored from '../../public/logoColored.png'

function Header() {
  return (
    <>
        <div id="header-container">
            <img src={logoColored} id='stroke-genius-logo' alt="stroke-genius-logo" />
        </div>
    </>
  )
}

export default Header