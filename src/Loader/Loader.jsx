import React, {useState, useEffect} from 'react'
import logo from '../../public/logo.png'
import SyncLoader from "react-spinners/SyncLoader";
import './Loader.css'

export default function Loader() {
  return (
    <>
        <div id="loader-container">
            <img src={logo} alt="Stroke-genius-logo" className='logo-loader' />
            <SyncLoader
                color="#000000"
                cssOverride={{}}
                margin={2}
                speedMultiplier={1}
             />   
        </div>
    </>
  )
}
