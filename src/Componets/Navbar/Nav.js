import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
            
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" data-aos="zoom-in">
    <Link className="navbar-brand" to="/"><span style={{color:"rgb(220,53,69)", fontSize:"1.5rem", fontWeight:"600"}}>Vishwas</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfollio">Portfollio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallary">Gallary</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
