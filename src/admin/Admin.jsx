import React from 'react'
import style from "./Admin.module.css"
import logo from "../assets/kalyanAshram_logo.png"
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AddData from './AddPrant';
import { NavLink, Outlet } from 'react-router-dom';

const Admin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(0);


    const login = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setAuth(1);
                // ...
                console.log(user);
            })
            .catch((error) => {
                alert("चुकीचा आयडी पासवर्ड")
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (<div className={style.admin}>
        {(auth === 1) ? <>
            <h1>Vanvasi Kalyan Ashram</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/admin"}>Dashboard</NavLink></li>
                    <li><NavLink to={"addworker"}>कार्यकर्ता जोडा</NavLink></li>
                    <li><NavLink to={"addvilage"}>गाव जोडा</NavLink></li>
                    <li><NavLink to={"adddivision"}>तालुका जोडा</NavLink></li>
                    <li><NavLink to={"adddistrict"}>जिल्हा जोडा</NavLink></li>
                    <li><NavLink to={"addprant"}>प्रांत जोडा</NavLink></li>
                </ul>
            </nav>
            <div className={style.admin_container}>
                <Outlet />
            </div>
        </> : <>
            <div className={style.container}>
                <div className={style.top}></div>
                <div className={style.bottom}></div>
                <div className={style.center}>
                    <img src={logo} alt="" />
                    <input type="email" placeholder="email" onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                    <h2>&nbsp;</h2>
                    <button onClick={login}>Login</button>
                </div>
            </div>
        </>}
    </div>
    )
}

export default Admin