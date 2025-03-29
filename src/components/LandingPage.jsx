import React from 'react'
import '../styles/LandingPage.css'
import Nav from './Nav'
import Footer from './Footer'
import graph from '../assets/graph.png'
import rating from '../assets/rating.png'
import search from '../assets/search.png'
import target from '../assets/target.png'


const LandingPage = () => {
  return (
    <div>
      <Nav/>
    <div className="cta-section">
        <div>
        <h2>Land Sharing got smarter</h2>
        <p>Property handling just got smarter. Pay per hour, fuel and insurance included.</p>
        </div>
        <button className="cta-btn">Get started and GO!</button>
    </div>
    
    <section className="hero">
        <div className="map-placeholder">Map Area</div>
        <div className="hero-content">
            <h2>Car sharing just got smarter</h2>
            <p>Pay per hour, fuel and insurance included.</p>
            
        </div>
    </section>

    <div className="search-bar">
        <input type="text" placeholder="Search for a car..."/>
        <button className="search-btn">
            <img src={search} alt="" />
            <p>Search</p>
        </button>
        <button className="find-btn">
            <img src={target} alt=""/>
            <p>Find on Map</p>
        </button>
    </div>
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    <section className="how-it-works">
        <h3>How it works?</h3>
        <div className="steps">
            <div className="step">
                <div className="step1"><img src={search} alt=""/></div>
                <h3>Find a Property near you</h3>
                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto veniam, recusandae aperiam assumenda, sed atque cum rerum corporis nesciunt maxime! Rerum,</div>
            </div>

            <div className="step">
                <div className="step2"><img src={graph} alt=""/></div>
                <h3>Locate and access the Property</h3>
                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto veniam, recusandae aperiam assumenda, sed atque cum rerum corporis nesciunt maxime! Rerum,</div>
            </div>

            <div className="step">
                <div className="step3"><img src={rating} alt=""/></div>
                <h3>Connect your phone and GO</h3>
                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto veniam, recusandae aperiam assumenda, sed atque cum rerum corporis nesciunt maxime! Rerum,</div>
            </div>

            
        </div>
    </section>

    <div className="why-use-container">

        <div className="why-use-header">
            <h2 className="why-use-title">why use land map</h2>
            <div className="why-use-stats">2,756,895</div>
        </div>

        <div className="why-use-features">
            
            <div className="why-use-feature-item">
                <h3 className="why-use-feature-title">Free to join</h3>
                <p className="why-use-feature-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui iusto ipsa quia sequi nisi laudantium.</p>
            </div>

            <div className="why-use-feature-item">
                <h3 className="why-use-feature-title">Free to join</h3>
                <p className="why-use-feature-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui iusto ipsa quia sequi nisi laudantium.</p>
            </div>

            <div className="why-use-feature-item">
                <h3 className="why-use-feature-title">Free to join</h3>
                <p className="why-use-feature-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui iusto ipsa quia sequi nisi laudantium.</p>
            </div>

            <div className="why-use-feature-item">
                <h3 className="why-use-feature-title">Free to join</h3>
                <p className="why-use-feature-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui iusto ipsa quia sequi nisi laudantium.</p>
            </div>

            <div className="why-use-feature-item">
                <h3 className="why-use-feature-title">Free to join</h3>
                <p className="why-use-feature-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui iusto ipsa quia sequi nisi laudantium.</p>
            </div>

            <div className="why-use-feature-item">
                <h3 className="why-use-feature-title">Free to join</h3>
                <p className="why-use-feature-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui iusto ipsa quia sequi nisi laudantium.</p>
            </div>

            
            
        </div>
        <section className="testimonials">
            <h3>Testimonials</h3>
            <p>"Great service, saved me a lot of money on car rentals!"</p>
        </section>
    </div>

    <Footer/>

    
    </div>
    
  )
}

export default LandingPage
