import React from 'react'
import video1 from "../../public/wired-flat-20-love-heart-hover-heartbeat.mp4"

const Banner = () => {
  return (
    <div className='w-100' style={{minHeight:"100vh"}}>
      <div className='bg-secondary d-flex justify-content-center align-items-center text-white fs-1' style={{height:"100vh"}}>
            Mern Stack
      </div>
      <video width="400" autoplay loop>
        <source src={video1} type='video/mp4'></source>
      </video>
    </div>
  )
}

export default Banner