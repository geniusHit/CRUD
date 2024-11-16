import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-100'>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">MERN Crud</a>
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink to="/" className="nav-link active text-white" aria-current="page" href="#">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/create" className="nav-link text-white" href="#">Create</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/read" className="nav-link text-white" href="#">Read</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/showalldata" className="nav-link text-white" href="#">Show All</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar