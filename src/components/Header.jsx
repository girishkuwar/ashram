import React from 'react'
import style from "./Header.module.css"
import logo from "../assets/kalyanAshram_logo.png"

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img src={logo} alt="" />
                <h1>जनजाति कल्याण आश्रम</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact US</a></li>
            </ul>
            <button>MENU</button>
        </div>
    )
}

export default Header