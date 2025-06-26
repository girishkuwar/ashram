import React, { useEffect, useState } from 'react'
import { addDoc, collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase.config';
import style from "./Admin.module.css"


const AddVilage = () => {

    const [name, setName] = useState("");
    const [prantlist, setprantlist] = useState([]);
    const [districtlist, setDistrictlist] = useState([]);
    const [divisionlist, setDivisionlist] = useState([]);
    const [divisionid, setDivisionid] = useState("");

    const addData = async () => {
        const docRef = await addDoc(collection(db, "vilages"), {
            name: name,
            division_id: divisionid
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
            setprantlist(dataArray);
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

    const getDiv = (id) => {
        const q = query(collection(db, "divisions"), where("district_id", "==", id));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let dataArray = [];
            querySnapshot.forEach((doc) => {
                dataArray.push({ ...doc.data(), id: doc.id });
            });
            setDivisionlist(dataArray);
        })
    }

    useEffect(() => {
      getPrant();
    }, [])
    

    return (
        <div className={style.form_card}>
            <h2>गाव जोडा</h2>

            <label for="username">गावाचे नाव</label>
            <input type="text" placeholder="name" onChange={(e) => { setName(e.target.value) }} value={name} />

            <label for="options">प्रांत निवडा</label>
            <select name="brand" onChange={(e) => getDis(e.target.value)}>
                {
                    prantlist.map((e, i) => {
                        return (<>
                            <option key={i} value={e.id}>{e.name}</option>
                        </>)
                    })
                }
            </select>

            <label for="options">जिल्हा निवडा</label>
            <select name="brand" onChange={(e) => getDiv(e.target.value)}>
                {
                    districtlist.map((e, i) => {
                        return (<>
                            <option key={i} value={e.id}>{e.name}</option>
                        </>)
                    })
                }
            </select>

             <label for="options">तालुका निवडा</label>
            <select name="brand" onChange={(e) => setDivisionid(e.target.value)}>
                {
                    divisionlist.map((e, i) => {
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

export default AddVilage