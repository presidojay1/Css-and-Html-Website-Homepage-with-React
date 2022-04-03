import './NavBar.css';
import './queries.css'
import React from 'react'
import image from '../images/dells.png'
const NavBar = () => {
  return (
    <>
    <section>
        <nav className='nav'>
            <div className="nav-img">
                <img src={image} height="10%" alt="" />
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
        </nav>

        <div className='section-body'>
            <h2>Welcome to the Samsung Demo.</h2>
            <h2> Smart and Secure</h2>
            <p>samsung tech allows for operation and use of these activities</p>
            <p>Be smart reiable and able to operate wisely the ne</p>
            <p>thrj ehghj hfk, bgsgswb</p>
            
               
            <a href='#' className='beta'>Learn More</a>
           
            
                
            
        </div>
    </section>
    </>
  )
}

export default NavBar