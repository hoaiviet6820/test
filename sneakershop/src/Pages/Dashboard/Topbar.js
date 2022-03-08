import React from 'react'
import "./TopBar.css";
import { FaBell } from "@react-icons/all-files/fa/FaBell";

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>SneakerShop</span>    
            </div>
            <div className='topRight'>
                <div className='topbarIcon'></div>  
                <FaBell />   
            </div>
        </div>
    </div>
  )
}
