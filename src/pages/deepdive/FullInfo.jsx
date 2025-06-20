import React from 'react'
import style from './Fullview.module.css'

const FullInfo = () => {
    return (
        <div className={style.Fullview}>
            <div className={style.image}>
                <div className={style.imgcontainer}>
                    <div className={style.imgshower}>
                        <img
                            src="https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FJason_and_Lucia_02_landscape.8aced7fd.jpg&w=3840&q=75"
                            alt=""
                        />
                    </div>
                    <div className={style.close} >
                        <img className={style.closeCross} src="closebtn" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullInfo