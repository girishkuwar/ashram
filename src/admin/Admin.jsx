import React from 'react'
import style from "./Admin.module.css"
import logo from "../assets/kalyanAshram_logo.png"
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (<>
        {(auth === 1) ? <h1>DONE</h1> : <>
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
    </>
    )
}

export default Admin