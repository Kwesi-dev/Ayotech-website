import React from 'react'
import "./services.css"
import pattern from "../../../images/pattern.png"
import pattern2 from "../../../images/pattern2.png"
import BlurOnIcon from '@mui/icons-material/BlurOn';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
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
                    <div className="card-header">
                        <BlurOnIcon className="dots-grid"/>
                        <div className="card-icon-container">
                            <LanguageRoundedIcon className="card-icon"/>
                        </div>
                    </div>
                    <div className="card-info">
                        <h2>Web3</h2>
                        <p>Become a hero in the era of decentralised technology with us! Get first-rate Web3 development services with a wide range of emerging blockchain technology approaches. Don’t delay and broaden your Web3 perspective now!</p>
                    </div>
                    <img src={pattern} alt="" className="pattern"/>
                    <img src={pattern2} alt="" className="pattern2"/>
                </div>
                <div className="services-card">
                    <div className="card-header">
                        <BlurOnIcon className="dots-grid"/>
                        <div className="card-icon-container">
                            <LanguageRoundedIcon className="card-icon"/>
                        </div>
                    </div>
                    <div className="card-info">
                        <h2>E-commerce Development</h2>
                        <p>Ayotech builds e-commerce websites by implementing cost-effective and creative solutions. Build your e-commerce success with Ayotech’s winning team. One thing is sure: You will never get lost in the crowd of e-commerce stores with them.</p>
                    </div>
                    <img src={pattern} alt="" className="pattern"/>
                    <img src={pattern2} alt="" className="pattern2"/>
                </div>
                <div className="services-card">
                    <div className="card-header">
                        <BlurOnIcon className="dots-grid"/>
                        <div className="card-icon-container">
                            <LanguageRoundedIcon className="card-icon"/>
                        </div>
                    </div>
                    <div className="card-info">
                        <h2>API Development</h2>
                        <p>When it comes to mobile app development, Ayotech puts enormous efforts into delivering valuable solutions to our customers. Our app developers always follow modern technologies and work with the newest frameworks to create an excellent app.</p>
                    </div>
                    <img src={pattern} alt="" className="pattern"/>
                    <img src={pattern2} alt="" className="pattern2"/>
                </div>
                <div className="services-card">
                    <div className="card-header">
                        <BlurOnIcon className="dots-grid"/>
                        <div className="card-icon-container">
                            <LanguageRoundedIcon className="card-icon"/>
                        </div>
                    </div>
                    <div className="card-info">
                        <h2>Magento Development</h2>
                        <p>From the design and integration of the Magento website to strategy and optimisation, migration and theme development, support and maintenance, Ayotech offers a full suite of professional services to customers. We know how to employ Magento 2 development essentials for producing scalable and comprehensive Magento stores.</p>
                    </div>
                    <img src={pattern} alt="" className="pattern"/>
                    <img src={pattern2} alt="" className="pattern2"/>
                </div>   
                <div className="services-card">
                    <div className="card-header">
                        <BlurOnIcon className="dots-grid"/>
                        <div className="card-icon-container">
                            <LanguageRoundedIcon className="card-icon"/>
                        </div>
                    </div>
                    <div className="card-info">
                        <h2>SEO</h2>
                        <p>We calculate the proper Return on Investment for your business providing a full list of SEO services. More visitors, more profit and good performance with just one click to contact our SEO experts and scale up your business as soon as possible.</p>
                    </div>
                    <img src={pattern} alt="" className="pattern"/>
                    <img src={pattern2} alt="" className="pattern2"/>
                </div>
                <div className="services-card">
                    <div className="card-header">
                        <BlurOnIcon className="dots-grid"/>
                        <div className="card-icon-container">
                            <LanguageRoundedIcon className="card-icon"/>
                        </div>
                    </div>
                    <div className="card-info">
                        <h2>Business Automation</h2>
                        <p>Ayotech involves instruments for streamlining processes, develops innovative commercial chances and always comes up with new methods for business automation. Due to our products and services, you can automate your business without worrying about time spent on innovation and growth.</p>
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