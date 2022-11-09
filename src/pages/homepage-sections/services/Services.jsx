import React from 'react'
import "./services.css"
import pattern from "../../../images/pattern.png"
import pattern2 from "../../../images/pattern2.png"
const Services = () => {
  return (
    <section className="home-services">
        <div className="home-services-wrapper">
            <div className="services-header">
                <h2>What We Do</h2>
                <div className="text-underline-container">
                    <div className="text-underline"></div>
                    <div className="text-underline-2"></div>
                </div>
            </div>
            <div className="services-cards">
                <div className="services-card">
                    <div></div>
                    <div className="card-info">
                        <h2>Web3</h2>
                        <p>Become a hero in the era of decentralised technology with us! Get first-rate Web3 development services with a wide range of emerging blockchain technology approaches. Don’t delay and broaden your Web3 perspective now!</p>
                    </div>
                    <img src={pattern} alt="" className="pattern"/>
                    <img src={pattern2} alt="" className="pattern2"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services