import React, { useEffect, useState } from 'react'
import style from './DeepDive.module.css'
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase.config';

const DeepDive = () => {
    const [list, setlist] = useState([]);
    const [bgBigName, setBgBigName] = useState("");
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('name'));

    const getList = (searchingcollection = "", compareto = "", comparewith = "") => {
        const q = query(collection(db, searchingcollection), where(compareto, "==", comparewith));
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
        getList(urlParams.get('coll'),urlParams.get('cwith'),urlParams.get('cto'));
    }, [])


    return (
        <div className={style.deepdive}>
            <div className={style.background}>
                <h1>{bgBigName}</h1>
                <section>
                    <div className={style.tbl_header}>
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>अ.क्र.</th>
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
                                        return <tr>
                                            <td>{i}</td>
                                            <td>{e.name}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default DeepDive