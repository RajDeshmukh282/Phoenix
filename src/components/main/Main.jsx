import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Pheonix</p>
            <img src={assets.user_icon} alt="user_icon " />
        </div>
        <div className='main-container'>
            <div className="greet">
                <p>
                    <span>Hello, Raj</span>
                </p>
                <p>Rise with Phoenix. What can I spark for you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Take me on a tour, Phoenix</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Inspire me with something cool</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>What can I build with AI?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Show me how Phoenix codes</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main