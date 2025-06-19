import React, { useState } from 'react'
import style from './DeepDive.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase.config';
import backbtn from '../../assets/back-button.png'

const District = () => {
    const { id } = useParams();
    const [bgBigName, setBgBigName] = useState("");
    const [list, setlist] = useState([]);
    const [empList, setEmpList] = useState([]);
    const navigate = useNavigate();


    const getList = (id) => {
        const q = query(collection(db, "districts"), where("prant_id", "==", id));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let dataArray = [];
            querySnapshot.forEach((doc) => {
                dataArray.push({ ...doc.data(), id: doc.id });
            });
            setlist(dataArray);
            console.log(dataArray);
        })
    }

    const getPrantemployes = (id) => {
        const q = query(collection(db, "employes_prant"), where("prant_id", "==", id));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let products = [];
            querySnapshot.forEach((doc) => {
                products.push({ ...doc.data(), id: doc.id });
            });
            setEmpList(products);
            console.log(products);
        })
    }

    const getName = async (id) => {
        const docRef = doc(db, "prant", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setBgBigName(docSnap.data());
            getList(id);
        } else {
            console.log("No such document!");
        }
    }




    useEffect(() => {
        getName(id);
        getPrantemployes(id);
        getList(id);

    }, [])

    return (
        <div className={style.deepdive}>
            <div className={style.background}>
                <h1 className={style.minheader}>प्रांत</h1>
                <h1>{bgBigName.name}</h1>
            </div>
            <section>
                <h2>कार्यकारिणी</h2>
                <div className={style.tbl_header}>
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                            <tr>
                                <th className={style.no}>अ.क्र.</th>
                                <th>कार्यकरिणीनचे नाव</th>
                                <th>पद</th>
                                <th>मो. नं.</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={style.tbl_content}>
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            {
                                empList.map((e, i) => {
                                    return <tr onClick={() => { navigate(`/employe/${e.id}`) }}>
                                        <td className={style.no}>{i + 1} &#10749;</td>
                                        <td>{e.name}</td>
                                        <td>{e.job}</td>
                                        <td>{e.contact_no}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <h2>जिल्हा सूची</h2>
                <div className={style.tbl_header}>
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                            <tr>
                                <th className={style.no}>अ.क्र.</th>
                                <th>नाव </th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={style.tbl_content}>
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            {
                                list.map((e, i) => {
                                    return <tr onClick={() => { navigate(`/division/${e.id}`) }}>
                                        <td className={style.no}>{i + 1} &#10749;</td>
                                        <td>{e.name}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
            <img onClick={() => { navigate(-1) }} className={style.backbtn} src={backbtn} alt="" />


        </div>
    )
}

export default District