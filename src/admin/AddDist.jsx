import React, { useEffect, useState } from 'react'
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase.config';
import style from "./Admin.module.css"

const AddDist = () => {
    const [name, setName] = useState("");
    const [list, setlist] = useState([]);
    const [prantid, setPrantid] = useState("");

    const addData = async () => {
        const docRef = await addDoc(collection(db, "districts"), {
            name: name,
            prant_id: prantid
        });
        alert(`${name} नवीन जिल्हा जोडला`);
    }

   const getPrant = () => {
           const q = query(collection(db, "prant"));
           const unsub = onSnapshot(q, (querySnapshot) => {
               let dataArray = [];
               querySnapshot.forEach((doc) => {
                   dataArray.push({ ...doc.data(), id: doc.id });
               });
               setlist(dataArray);
           })
       }

    useEffect(() => {
      getPrant();
    }, [])
    

    return (
        <div className={style.form_card}>
            <h2>जिल्हा जोडा</h2>

            <label for="username">जिल्ह्याचे नाव</label>
            <input type="text" placeholder="name" onChange={(e) => { setName(e.target.value) }} value={name} />

            <label for="options">प्रांत निवडा</label>
            <select name="brand" onChange={(e) => setPrantid(e.target.value)}>
                {
                    list.map((e, i) => {
                        return (<>
                            <option key={i} value={e.id}>{e.name}</option>
                        </>)
                    })
                }
            </select>

            <button onClick={addData}>Submit</button>

            <div className={style.result}>
            </div>
        </div>
    )
}

export default AddDist