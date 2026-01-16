import React from "react";
import {
  BrowserRouter as Router,
  
  Link
} from "react-router-dom";

const Navbar=()=>{

    return (
      <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{color:'red'}} to="/business">Business</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" style={{color:'yellow'}} to="/entertainment">Entertainmen</Link></li>t
                <li className="nav-item">
                  <Link className="nav-link" style={{color:'blue'}} to="/general">General</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" style={{color:'orange'}} to="/health">Health</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" style={{color:'purple'}} to="/science">Science</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" style={{color:'green'}} to="/sports">Sports</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" style={{color:'pink'}} to="/technology">Technology</Link></li>
                

              </ul>
              
            </div>
          </div>
        </nav>
      </>
    );
  
}

export default Navbar;
