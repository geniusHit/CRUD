import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-dark text-white d-flex w-100 py-5 flex-md-row flex-column justify-content-center align-items-center gap-3 justify-content-md-evenly align-items-md-start' style={{bottom:'0'}}>
      <div className='fs-5' style={{height:"100%"}}>
        <div>MERN Crud</div>
        <div style={{fontSize:"12pt"}} className="text-secondary">Designed and Built by Rohit</div>
        <div style={{fontSize:"12pt"}} className="text-secondary">Code licensed MIT, docs CC BY 3.0.</div>
        <div style={{fontSize:"12pt"}} className="text-secondary">Currently v5.3.3.</div>
        <div style={{fontSize:"12pt"}} className="text-light">Copyright @ 2024 ©</div>
      </div>

      <div className='fs-5'>
        <ul className='' style={{listStyle:"none"}}>
            <li className='fw-bold text-secondary'>Links</li>
            <li>Home</li>
            <li>Create</li>
            <li>Read</li>
            <li>Show All</li>
        </ul>
      </div>

      <div>
        <li className='fw-bold text-secondary fs-5 mb-2' style={{listStyle:"none"}}>Follow</li>

        <div style={{display:"grid", gridTemplateColumns:"33% 33% 33%", gap:"14px", fontSize:"16pt"}}>
          <CiLinkedin />
          <FaXTwitter />
          <IoLogoYoutube />
          <FaInstagram />
          <FaGithub />
        </div>
      </div>
    </div>
  )
}

export default Footer