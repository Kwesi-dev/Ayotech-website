import React, { useEffect, useState } from 'react'
import "./navbar.css"
import logo from "../../images/logo.svg"
import Button from '../button/Button'

const Navbar = () => {
  const [scrollHeight, setScrollHeight] = useState(0) 
  useEffect(() => {
    const updateScrollHeight = () => {
        setScrollHeight(window.scrollY)
    }
    window.addEventListener("scroll", updateScrollHeight)

    return () => window.removeEventListener("scroll", updateScrollHeight)
  })
  return (
    <div className={scrollHeight < 50 ? "sticky-navbar" : "sticky-navbar fixed"}>
        <nav className="sticky-navbar-wrapper">
            <img src={logo} alt="logo" className="logo"/>
            <ul className="nav-menu">
                <li className="menu-items">
                    <span>Home</span>
                </li>
                <li className="menu-items settings">
                    <div>
                        <span>Settings</span>
                    </div>
                    <div className="dropdown">
                        <ul className="dropdown-menu">
                            <li className="dropdown-menu-item">Blockchain</li>
                            <li className="dropdown-menu-item">Magento eCommerce</li>
                            <li className="dropdown-menu-item">PWA Headless eCommerce</li>
                        </ul>
                    </div>
                </li>
                <li className="menu-items career">
                    <span>Career</span>
                    <div className="career-badge">9</div>
                </li>
                <li className="menu-items">
                    <span>About</span>
                </li>
                <li className="menu-items">
                    <span>Contact</span>
                </li>
                <li>
                    <Button>Get A Quote</Button>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar