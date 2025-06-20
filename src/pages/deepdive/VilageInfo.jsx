import React, { useState } from 'react'
import style from './DeepDive.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase.config';
import backbtn from '../../assets/back-button.png'

const VilageInfo = () => {
    const { id } = useParams();
    const [bgBigName, setBgBigName] = useState("");
    const navigate = useNavigate();


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
        getName(id);
    }, [])
    return (
        <div className={style.deepdive}>
            <div className={style.background}>
                <h1 className={style.minheader}>गाव</h1>
                <h1>{bgBigName.name}</h1>
            </div>
            <section className={style.projects}>
                <div className={style.projectname} onClick={() => { navigate(`/projectinfo?vilage=${id}&project=healthcare`) }}>आरोग्य</div>
                <div className={style.projectname} onClick={() => { navigate(`/projectinfo?vilage=${id}&project=hostel`) }}>छात्रावास</div>
                <div className={style.projectname} onClick={() => { navigate(`/projectinfo?vilage=${id}&project=education`) }}>शिक्षण</div>
                <div className={style.projectname} onClick={() => { navigate(`/projectinfo?vilage=${id}&project=rular_welfare`) }}>ग्राम विकास</div>
                <div className={style.projectname} onClick={() => { navigate(`/projectinfo?vilage=${id}&project=women`) }}>महिला कार्य</div>
                <div className={style.projectname} onClick={() => { navigate(`/projectinfo?vilage=${id}&project=tradition`) }}>श्रद्धा जागरण</div>
                <div className={style.projectname} onClick={() => { navigate(`/projectinfo?vilage=${id}&project=urban_activities`) }}>नगरीय कार्य</div>
                <div className={style.projectname} onClick={() => { navigate(`/projectinfo?vilage=${id}&project=sports`) }}>खेलकूद</div>
                <div className={style.projectname} onClick={() => { navigate(`/projectinfo?vilage=${id}&project=folk_art`) }}>लोककला</div>
                <div className={style.projectname} onClick={() => { navigate(`/projectinfo?vilage=${id}&project=outreach`) }}>प्रचार प्रसार</div>
                <div className={style.projectname} onClick={() => { navigate(`/projectinfo?vilage=${id}&project=tribal_contact`) }}>जनजाती संपर्क</div>
                <div className={style.projectname} onClick={() => { navigate(`/projectinfo?vilage=${id}&project=tribal_rights`) }}>हितरक्षा</div>
            </section>
            <img onClick={() => { navigate(-1) }} className={style.backbtn} src={backbtn} alt="" />

        </div>
    )
}

export default VilageInfo