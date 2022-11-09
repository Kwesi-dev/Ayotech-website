import React from 'react'
import "./portfolio.css"
import pic1 from "../../../images/pic1.jpg"
import pic2 from "../../../images/pic2.jpg"
import pic3 from "../../../images/pic3.jpg"
import pic4 from "../../../images/pic4.jpg"
import pic5 from "../../../images/pic5.jpg"
import pic6 from "../../../images/pic6.jpg"

const Portfolio = () => {
  return (
    <section className="home-portfolio">
        <div className="home-portfolio-wrapper">
            <div className="portfolio-header">
                <h2>Take A Look At Our Latest Portfolio</h2>
                <div className="text-underline-container">
                    <div className="text-underline"></div>
                    <div className="text-underline-2"></div>
                </div>
            </div>
            <div className="portfolio-cards">
                <img src={pic1} alt="" className="portfolio-img"/>
                <img src={pic2} alt="" className="portfolio-img"/>
                <img src={pic3} alt="" className="portfolio-img"/>
                <img src={pic4} alt="" className="portfolio-img"/>
                <img src={pic5} alt="" className="portfolio-img"/>
                <img src={pic6} alt="" className="portfolio-img"/>
            </div>
        </div>
    </section>
  )
}

export default Portfolio