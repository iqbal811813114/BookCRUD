import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary ">
  <div className="container">
    <a className="navbar-brand text-white"  >BOOKS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <Link className="nav-item nav-link active text-white" to="/">
            Home
        </Link>
        <Link className="nav-item nav-link active text-white" to="/books">
           Books
        </Link>
        <Link className="nav-item nav-link active text-white" to="/addbooks">
           Add Books
        </Link>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
