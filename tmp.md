 ```
 const looper = () => {
        data.map(async (e) => {
            if (window.confirm("Are You Sure To add " + e.name)) {
                const docRef = await addDoc(collection(db, "employes"), {
                    name: e.name,
                    job: e.job,
                    address: e.address,
                    position: e.position,
                    contact_no: e.contact_no,
                    district_id: "skM7Ra87MDqu9CxoQAh1"
                });
            } else {
                alert(e.name + " Discarded");
            }
        })
    }
```