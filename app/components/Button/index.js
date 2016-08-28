import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"

export const Button = ({ _style, type, children, onClick }) => {
  return (
    <button 
      style={_style}
      onClick={onClick}
      className={style[type]}>
      {children}
    </button>
  )
}

export default cssModules(Button, style)