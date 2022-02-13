import React from 'react'

import './fancyClock.css';

function FancyClock() {
  return (
    <div className="fancy-clock">
         <span className="fancy-clock__time fancy-clock__time--hours">11</span>
         <span className="fancy-clock__time fancy-clock__time--minutes">02</span>
    </div>
  )
}

export default FancyClock