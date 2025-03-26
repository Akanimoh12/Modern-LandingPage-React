import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logo.s'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}