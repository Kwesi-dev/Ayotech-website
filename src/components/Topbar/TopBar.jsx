import React from 'react'
import "./topbar.css"
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <div className="topbar-left-item">
            <TextsmsOutlinedIcon className="icon"/>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">Send Email</a>
          </div>
          <div className="topbar-left-item">
            <PhoneInTalkOutlinedIcon className="icon"/>
            <span>+{"("}374{")"}55{" "}206{" "}606</span>
          </div>
        </div>
        <div className="topbar-right">
          <FacebookIcon className="social-icon facebook"/>
          <LinkedInIcon className="social-icon"/>
        </div>
      </div>
    </div>
  )
}

export default TopBar