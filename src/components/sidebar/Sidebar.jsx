import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        
        <div className='top'>
            <img className='menu' src={assets.menu_icon} alt="icon" />
            <div className='new-chat'>
              <img src={assets.plus_icon} alt="" />
              <p>New Chat</p>
            </div>
        </div>
    </div>

  )
}

export default Sidebar