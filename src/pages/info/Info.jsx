import React from 'react'
import style from "./Info.module.css"
import backG from "../../assets/birsa-removebg-preview.png"

const Info = () => {
  return (
    <div className={style.infopage}>
      <div className={style.fullcircle}>
        <div className={style.circles}><p>आरोग्य</p></div>
        <div className={style.circles}><p>हित रक्षा</p></div>
        <div className={style.circles}><p>ग्रामविकास</p></div>
        <div className={style.circles}><p>खेळ कुद</p></div>
        <div className={style.circles}><p>लोक कला</p></div>
        <div className={style.circles}><p>प्रचार प्रसार</p></div>
        <div className={style.circles}><p>छात्रा वास</p></div>
        <div className={style.circles}><p>शिक्षण</p></div>
        <img src={backG} alt="" />
      </div>
    </div>
  )
}

export default Info