import { addDoc, collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase.config';
import style from "./Home.module.css"
import Card from '../card/Card';


const Home = () => {
    const [prantList, setPrantList] = useState([]);
    const [selectedPrant, setSelectedPrant] = useState(null);
    const [districtsList, setDistrictsList] = useState([]);
    const [selectedDist, setSelectedDist] = useState(null)
    const [employesList, setEmployesList] = useState([]);
    const [selected, setSelected] = useState(null);
    const [employeDetailes, setEmployeDetailes] = useState([]);

    const [prant_employes, setPrant_employes] = useState([]);
    const [selectedPrant_Employe, setSelectedPrant_Employe] = useState(null);


    const getPrant = () => {
        const q = query(collection(db, "prant"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let products = [];
            querySnapshot.forEach((doc) => {
                products.push({ ...doc.data(), id: doc.id });
            });
            setPrantList(products);
            console.log(products);
        })
    }

    const getDistricts = (id) => {
        setEmployesList([]);
        setSelectedDist(null);
        setSelectedPrant_Employe(null);
        setSelected(null);
        getPrantemployes(id);
        const q = query(collection(db, "districts"), where("prant_id", "==", id));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let products = [];
            querySnapshot.forEach((doc) => {
                products.push({ ...doc.data(), id: doc.id });
            });
            setDistrictsList(products);
            console.log(products);
        })
    }

    const getEmployes = (id) => {
        setSelected(null);
        setSelectedPrant_Employe(null);
        const q = query(collection(db, "employes"), where("district_id", "==", id));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let products = [];
            querySnapshot.forEach((doc) => {
                products.push({ ...doc.data(), id: doc.id });
            });
            setEmployesList(products);
            console.log(products);
        })
    }

    const getPrantemployes = (id) => {
        setSelected(null);
        setSelectedPrant_Employe(null);
        const q = query(collection(db, "employes_prant"), where("prant_id", "==", id));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let products = [];
            querySnapshot.forEach((doc) => {
                products.push({ ...doc.data(), id: doc.id });
            });
            setPrant_employes(products);
            console.log(products);
        })
    }





    useEffect(() => {
        getPrant();
    }, [])

    return (
        <div className={style.home}>
            <marquee behavior="scroll" direction="left">Janjati Kalyan Ashram is a child organization of Akhil Bharatiya Vanvasi Kalyan Ashram. It is primarily active across the region of Western Maharashtra region including administrative districts of Nashik, Nagar, Pune, Sangli, Satara, Kolhapur and Solapur (further divided across 15 work districts as shown below. Janjati Kalyan Ashram is headquartered in Nashik city with branch offices at several locations.

                Janjati Kalyan Ashram is engaged in Tribal welfare activities across 14 different dimensions (आयाम).</marquee>

            <div className={style.list_section}>
                <div className={style.list}>
                    <h4>PRANT</h4>
                    <ul>
                        {
                            prantList.map((e, index) => {
                                return <li style={{ backgroundColor: selectedPrant === index ? '#697783' : 'white', color: selectedPrant === index ? 'white' : 'black' }} onClick={() => { getDistricts(e.id); setSelectedPrant(index); }} key={e.id}>{e.name}</li>
                            })
                        }
                    </ul>
                </div>
                <div className={style.list}>
                    <h4>DISTRICT</h4>
                    <ul>
                        {
                            districtsList.map((e, index) => {
                                return <li style={{ backgroundColor: selectedDist === index ? '#697783' : 'white', color: selectedDist === index ? 'white' : 'black' }} onClick={() => { getEmployes(e.id); setSelectedDist(index); }} key={e.id}>{e.name}</li>
                            })
                        }
                    </ul>
                    <h4>Prant Workers</h4>
                    <ul>
                        {
                            prant_employes.map((e, index) => {
                                return <li style={{ backgroundColor: selectedPrant_Employe === index ? '#697783' : 'white', color: selectedPrant_Employe === index ? 'white' : 'black' }} onClick={() => { setEmployeDetailes(e); setSelectedPrant_Employe(index); }} key={e.id}>{e.name}</li>
                            })
                        }
                    </ul>
                </div>
                <div className={style.list}>
                    <h4>EMPLOYES</h4>
                    <ul className={style.employesList}>
                        {
                            employesList.map((e, index) => {
                                return <li style={{ backgroundColor: selected === index ? '#697783' : 'white', color: selected === index ? 'white' : 'black' }} onClick={() => { setEmployeDetailes(e); setSelected(index); }} key={e.id}>{e.name}</li>
                            })
                        }
                    </ul>
                </div>
                {(selected !== null || selectedPrant_Employe !== null) ? <Card employeDetailes={employeDetailes} /> : ""}


            </div>
        </div>
    )
}

export default Home