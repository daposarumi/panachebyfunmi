import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Subscribe and never miss a thing</h1>
        <p>From sales to newsletters and latest happening in our HQ</p>
        <div>
            <input type="email" placeholder="Email address"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
