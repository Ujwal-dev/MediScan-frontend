import React from 'react'
import "./Service.css"

export default function Service(props) {
  return (
    <div className='service-section'>
      <div className='service-card-container'>
        <h3 className='service-title'>Service {props.num}</h3>
        <p className='service-desc'>Describing the service</p>
        <button className='service-btn'>
            <span className="text">Try it</span>
        </button>
      </div>
    </div>
  )
}
