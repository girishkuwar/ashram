import React, { useState } from 'react'
import style from './DeepDive.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase.config';

const Prant = () => {
    const [bgBigName, setBgBigName] = useState("JanJati Kalyan Ashram");
    const [list, setlist] = useState([]);
    const navigate = useNavigate();

    const getPrant = () => {
        const q = query(collection(db, "prant"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let products = [];
            querySnapshot.forEach((doc) => {
                products.push({ ...doc.data(), id: doc.id });
            });
            setlist(products);
            console.log(products);
        })
    }

    useEffect(() => {
        getPrant();
    }, [])



    return (
        <div className={style.deepdive}>
            <div className={style.background}>
                <h1>{bgBigName}</h1>
            </div>
            <section>
                <div className={style.tbl_header}>
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                            <tr>
                                <th className={style.no}>अ.क्र.</th>
                                <th>नाव</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={style.tbl_content}>
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            {
                                list.map((e, i) => {
                                    return <tr onClick={() => { navigate(`/district/${e.id}`) }}>
                                        <td className={style.no}>{i + 1} &#10749;</td>
                                        <td>{e.name}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>

        </div>
    )
}

export default Prant