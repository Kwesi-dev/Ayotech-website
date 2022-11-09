import React from 'react'
import Button from '../../../components/button/Button'
import "./intro.css"
import introImg from "../../../images/introImg.svg"
const Intro = () => {
  return (
    <section className="home-intro">
        <div className="home-intro-wrapper">
            <div className="intro-left">
                <h1>eCommerce Development Company With Unique and Speedy Solutions</h1>
                <p>Ayotech develops your ideas by suggesting various solutions with different levels of complexity. Our top-rated web developers help to leverage every organisation that wishes to provide high quality in every aspect of the digital arena.</p>
                <Button>Get Started</Button>
            </div>
            <div className="intro-right">
                <img src={introImg} alt="home img" className="introImg"/>      
            </div>
        </div>
    </section>
  )
}

export default Intro