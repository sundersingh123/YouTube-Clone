import React, { useState } from 'react'
import { AiOutlineAudio,AiOutlineVideoCameraAdd, AiOutlineBell} from "react-icons/ai";
import {CiSearch} from 'react-icons/ci'


function Header() {
  return (
    <>
    <nav>
        <div className='hamburger'>
            <div className='ham'>
                <div className='line1'></div>
                <div className='line1'></div>
                <div className='line1'></div>
            </div>
            <img src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg' alt='logo'/>
        </div>
        <div className='search-bar'>
            <div className='search-input'>
                <input type='search' placeholder='Search'/>
            <h1> <CiSearch id='search' title='search'/></h1>
            </div>
                <button><AiOutlineAudio title='speak'/></button>
        </div>
        <div className='right-icons'>
          <div className='icons'>
            <AiOutlineVideoCameraAdd id='camera' title='live'/>
            <AiOutlineBell id='bell' title='notifications'/>
            <div className='account-image' title='account'>
                <img src='https://cdn.siasat.com/wp-content/uploads/2023/05/image-48-3.jpg' alt='account holder' />
            </div>
          </div>
        </div>

 
    </nav>
    </>
  )
}

export default Header