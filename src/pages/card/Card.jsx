import React from 'react'
import style from "./Card.module.css"
import logo from "../../assets/kalyanAshram_logo.png"

const Card = ({employeDetailes}) => {
    return (
        <div className={style.card}>
            <h4>{employeDetailes.name}</h4>
            <h5>{employeDetailes.job}</h5>
            <p>{employeDetailes.address}</p>
            <p>{employeDetailes.contact_no}</p>
            <p>Email : {employeDetailes.email}</p>
            <img src={logo} alt=""></img>
        </div>
    )
}

export default Card