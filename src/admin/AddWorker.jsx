import React, { useEffect, useState } from 'react'
import { addDoc, collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase.config';
import style from "./Admin.module.css"

const AddWorker = () => {
    const [name, setName] = useState("");
    const [prantlist, setprantlist] = useState([]);
    const [districtlist, setDistrictlist] = useState([]);
    const [divisionlist, setDivisionlist] = useState([]);
    const [vilageslist, setVilageslist] = useState([]);
    const [vilageid, setVilageid] = useState("");
    const [projectname, setprojectname] = useState("");
    const [address, setaddress] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const projectNametranslate = {
        healthcare: "आरोग्य",
        hostel: "छात्रावास",
        education: "शिक्षण",
        rular_welfare: "ग्राम विकास",
        women: "महिला कार्य",
        tradition: "श्रद्धा जागरण",
        urban_activities: "नगरीय कार्य",
        sports: "खेलकूद",
        folk_art: "लोककला",
        outreach: "प्रचार प्रसार",
        tribal_contact: "जनजाती संपर्क",
        tribal_rights: "हितरक्षा"
    }

    const addData = async () => {
        const docRef = await addDoc(collection(db, "workerinfo"), {
            name: name,
            working_vilage: vilageid,
            address:address,
            contact_no:number,
            email:email,
            position:projectname
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

    const getvilage = (id) => {
        const q = query(collection(db, "vilages"), where("division_id", "==", id));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let dataArray = [];
            querySnapshot.forEach((doc) => {
                dataArray.push({ ...doc.data(), id: doc.id });
            });
            setVilageslist(dataArray);
        })
    }


    useEffect(() => {
        getPrant();
    }, [])



    return (
        <div className={style.form_card_big} >
            <div className={style.sec}>
                <h2>कार्यकर्ता जोडा</h2>

                <label for="username">कार्यकर्त्याचे  नाव</label>
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
                <select name="brand" onChange={(e) => getvilage(e.target.value)}>
                    {
                        divisionlist.map((e, i) => {
                            return (<>
                                <option key={i} value={e.id}>{e.name}</option>
                            </>)
                        })
                    }
                </select>

                <label for="options">गाव निवडा</label>
                <select name="brand" onChange={(e) => setVilageid(e.target.value)}>
                    {
                        vilageslist.map((e, i) => {
                            return (<>
                                <option key={i} value={e.id}>{e.name}</option>
                            </>)
                        })
                    }
                </select>

                <button onClick={addData}>Submit</button>
            </div>
            <div className={style.sec}>
                <h2>.</h2>
                <label for="options">प्रकल्प निवडा</label>
                <select name="brand" onChange={(e) => setprojectname(e.target.value)}>
                    {(() => {
                        const elements = [];
                        for (let i = 0; i < 12; i++) {
                            elements.push(<option key={i} value={Object.keys(projectNametranslate)[i]}>{Object.values(projectNametranslate)[i]}</option>);
                        }
                        return elements;
                    })()}
                </select>

                <label for="username">पत्ता</label>
                <input type="text" placeholder="name" onChange={(e) => { setaddress(e.target.value) }} value={address} />

                <label for="username">मो.नं.</label>
                <input type="text" placeholder="name" onChange={(e) => { setNumber(e.target.value) }} value={number} />

                <label for="username">ईमेल आयडी</label>
                <input type="text" placeholder="name" onChange={(e) => { setEmail(e.target.value) }} value={email} />
            </div>
        </div>
    )
}

export default AddWorker