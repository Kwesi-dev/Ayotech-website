import React from 'react'
import Button from '../../../components/button/Button'
import "./about.css"
import aboutImg from "../../../images/img4.png"
const About = () => {
  return (
    <section className="about">
        <div className="about-wrapper">
            <img src={aboutImg} alt="about-img" className="aboutImg"/>
            <div className="about-right">
                <div className="about-header">
                    <h2>About Us</h2>
                    <div className="text-underline-container">
                        <div className="text-underline"></div>
                        <div className="text-underline-2"></div>
                    </div>
                </div>
                <p>All we do at Ayotech, is based on our core values and expertise. We help communities, businesses, and individuals to get noticed in the digital world through perfect IT and Digital Marketing solutions.All we do at Ayotech, is based on our core values and expertise. We help communities, businesses, and individuals to get noticed in the digital world through perfect IT and Digital Marketing solutions.</p>
                <p>Keeping in mind that without Information Technology, society and businesses would be unable to advance, widen their network, and make progress, we are here to provide end-to-end solutions for your business growth.</p>
                <Button>Know Us Better</Button>
            </div>
        </div>
    </section>
  )
}

export default About