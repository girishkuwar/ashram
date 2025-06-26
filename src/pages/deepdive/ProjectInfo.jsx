import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { db } from '../../firebase.config';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import style from './DeepDive.module.css'
import backbtn from '../../assets/back-button.png';

const ProjectInfo = () => {
    const [bgBigName, setBgBigName] = useState("");
    const [searchParams] = useSearchParams();
    const vilageId = searchParams.get('vilage');
    const project = searchParams.get('project');
    const [list, setlist] = useState([]);
    const navigate = useNavigate();

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



    const getList = () => {
        const q = query(collection(db, "workerinfo"), where("working_vilage", "==", vilageId), where("position", "==", project));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let dataArray = [];
            querySnapshot.forEach((doc) => {
                dataArray.push({ ...doc.data(), id: doc.id });
            });
            setlist(dataArray);
            console.log(dataArray);
        })
    }

    const getName = async (id) => {
        const docRef = doc(db, "vilages", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setBgBigName(docSnap.data());
        } else {
            console.log("No such document!");
        }
    }




    useEffect(() => {
        console.log(vilageId);
        console.log(project);
        getName(vilageId);
        getList();
    }, [])

    return (
        <div className={style.deepdive}>
            <div className={style.background}>
                <h1 className={style.minheader}>{bgBigName.name}</h1>
                <h1>{projectNametranslate[project]}</h1>
            </div>
            <div className={style.infocard}>
                {(list.length !== 0) ? <>
                    <h1>प्रकल्प प्रमुख : {list[0].name}</h1>
                    <h2>पत्ता : {list[0].address}</h2>
                    <h2>मो. नं. : {list[0].contact_no}</h2>
                    <h2>ईमेल : {list[0].email}</h2>
                </> : <h1>NO DATA FOUND</h1>}
            </div>
            <img onClick={() => { navigate(-1) }} className={style.backbtn} src={backbtn} alt="" />
        </div>
    )
}

export default ProjectInfo