import { ChevronRight } from '@mui/icons-material'
import React from 'react'
import "./button.css"
const Button = ({ children }) => {
  return (
    <button className="button-container">
        <ChevronRight className="chevron-icon"/>
        <span>{children}</span>
    </button>
  )
}

export default Button