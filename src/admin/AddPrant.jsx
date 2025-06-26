import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase.config';
import style from "./Admin.module.css"

const AddPrant = () => {
  const [name, setName] = useState("");

  const addData = async () => {
    const docRef = await addDoc(collection(db, "prant"), {
      name: name
    });
    alert(`${name} नवीन प्रांत जोडले`);
  }
  return (
    <div className={style.form_card}>
      <h2>प्रांत जोडा</h2>

      <label for="username">प्रांताचे नाव</label>
      <input type="text" placeholder="name" onChange={(e) => { setName(e.target.value) }} value={name} />

     

      <button onClick={addData}>Submit</button>

    </div>

  )
}

export default AddPrant