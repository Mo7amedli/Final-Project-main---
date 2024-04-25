import React from 'react'
import { Link } from "react-router-dom";
import logo from '..//image/logo.png'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top nav">
            <div className="container">
                <Link className="navbar-brand" to={'/'}><img style={{width:'70px', height:'50px'}} src={logo}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                    <Link className="btn btn-outline-primary" to={'signin'}>Sign in</Link>
                    <Link className="btn btn-outline-primary" to={'jobposts'}>jobposts</Link>
                </ul>
                </div>
            </div>
        </nav>
    </>
    
  )
}
export default Navbar;