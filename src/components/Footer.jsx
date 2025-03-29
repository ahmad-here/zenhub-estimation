import React from 'react'
import '../styles/LandingPage.css'

const Footer = () => {
  return (
    <div>
      <footer>
    <div className="footer-container">
        <div>
            <h3>Company</h3>
            <div><ul>
                <li>About</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Jobs</li>
            </ul></div>
        </div>
        <div>
            <h3>Product</h3>
            <div><ul>
                <li>How it works</li>
                <li>Testimonials</li>
                <li>Support</li>
                <li>Privacy Policy</li>
            </ul></div>
        </div>
        <div>
            <h3>Contact</h3>
            <div><ul>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Email</li>
            </ul></div>
        </div>

        <div>
            <h3>Download App</h3>
            <div>
                <img src="" alt=""/>
                <img src="" alt=""/>
            </div>
        </div>
    </div>

        <div>
            <p>@2005-2012 All rights reserved</p>
        </div>
        
    </footer>
    </div>
  )
}

export default Footer
