import React, { useEffect, useState } from 'react'
import { addDoc, collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase.config';
import style from "./Admin.module.css"

const AddDiv = () => {
    const [name, setName] = useState("");
    const [list, setlist] = useState([]);
    const [districtlist, setDistrictlist] = useState([]);
    const [districtid, setdistrictid] = useState("");

    const addData = async () => {
        const docRef = await addDoc(collection(db, "divisions"), {
            name: name,
            district_id: districtid
        });
        alert(`${name} नवीन तालुका जोडला`);
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

    const getDis = (id) => {
        const q = query(collection(db, "districts"), where("prant_id", "==", id));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let dataArray = [];
            querySnapshot.forEach((doc) => {
                dataArray.push({ ...doc.data(), id: doc.id });
            });
            setDistrictlist(dataArray);
        })
    }

    useEffect(() => {
        getPrant();
    }, [])


    return (
        <div className={style.form_card}>
            <h2>तालुका जोडा</h2>

            <label for="username">तालुक्याचे नाव</label>
            <input type="text" placeholder="name" onChange={(e) => { setName(e.target.value) }} value={name} />

            <label for="options">प्रांत निवडा</label>
            <select name="brand" onChange={(e) => getDis(e.target.value)}>
                {
                    list.map((e, i) => {
                        return (<>
                            <option key={i} value={e.id}>{e.name}</option>
                        </>)
                    })
                }
            </select>
            <label for="options">जिल्हा निवडा</label>
            <select name="brand" onChange={(e) => setdistrictid(e.target.value)}>
                {
                    districtlist.map((e, i) => {
                        return (<>
                            <option key={i} value={e.id}>{e.name}</option>
                        </>)
                    })
                }
            </select>

            <button onClick={addData}>Submit</button>

        </div>
    )
}

export default AddDiv