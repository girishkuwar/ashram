import React from 'react'
import style from "./Header.module.css"
import logo from "../assets/kalyanAshram_logo.png"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img src={logo} alt="" />
                <h1>जनजाति कल्याण आश्रम</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <NavLink to={"/"}></NavLink>
                <li><a href="#">कार्यकारिणी</a></li>
                <li><a href="#">Contact US</a></li>
            </ul>
            <button>MENU</button>
        </div>
    )
}

export default Header