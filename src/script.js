import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase.config.js";

const data = [
    {
        "पद": "अध्यक्ष",
        "नाव": "डॉ . श्री  भरत रामकृष्ण केळकर",
        "पत्ता": "केळकर हॉस्पिटल मुंबईमार्ग मागे बस स्टँड नाशिक 422 001.",
        "मो": "Mob.: 09822040168\nTel.: 0253-2313308\nWork: 0253-2574008",
        "Email": "bkelkar@gmail.com"
    },
    {
        "पद": "उपाध्यक्ष",
        "नाव": "श्री. एकनाथ हरिभाऊ बुरसे ",
        "पत्ता": "A-504,चिंतामणी कोर्ट को ओप. Hsg सोसायटी 320 क्षणीवत पेठ \nसुयोग मंगल कार्यालय जवळ पुणे -411030",
        "मो": "Mob.: 9822435717",
        "Email": ""
    },
    {
        "पद": "उपाध्यक्ष",
        "नाव": "श्री. मधुकर श्रीराम आचार्य",
        "पत्ता": "आचार्य हॉस्पिटल वणी ता. दिडोरी ,जि.नाशिक-422215",
        "मो": "Mob.: 9423123069",
        "Email": ""
    },
    {
        "पद": "उपाध्यक्ष",
        "नाव": "श्री. नागेश काळे",
        "पत्ता": "405, केसर किंगडम , दत्त नगर , \n आळंदी रोड , दिघे , पुणे-411015",
        "मो": "",
        "Email": ""
    },
    {
        "पद": "सचिव",
        "नाव": "श्री. शरद काशीनाथ शेळके",
        "पत्ता": "Flat No. 12, Ganesh Bhakti Appartment, \nOpp Janlashmi Bank, Dindori Road, \nNashik - 422 004",
        "मो": "Mob.: 09423928765",
        "Email": "sharadkashinathshelke@gmail.com"
    },
    {
        "पद": "सहसचिव",
        "नाव": "श्री. संदीप जयराम साबळे",
        "पत्ता": "Flat No. A203, Shitole Ampayar, \nFamous Chouk, Main Road, \nNew Sangavi, Pune-411027",
        "मो": "Mob: 9422038689",
        "Email": "sabalesandeep1@gmail.com"
    },
    {
        "पद": "सहसचिव",
        "नाव": "श्री. Prakash Khichade",
        "पत्ता": "B-203, Amarendrashree Society, \nGanesh Mala, Near Vadachya Ganpati,\nSinghgad Road, Pune 411030",
        "मो": "Mob.: 9730007694\nTel.: 020-24251624",
        "Email": "prakash.h.khichade@gmail.com"
    },
    {
        "पद": "कोषाध्यक्ष",
        "नाव": "श्री. Dilip Mehata",
        "पत्ता": "'Shrirang', 936/3 Irvin Road, \nNew Nana Peth, Opp. Mahatma Phule School, Pune-411002",
        "मो": "Mob.: 9822022253",
        "Email": "dilipmehata23@gmail.com"
    },
    {
        "पद": "सहकोषाध्यक्ष",
        "नाव": "श्री. Sanjiv S. Daporkar",
        "पत्ता": "10 Anandwan Collage Road, \nNashik-422005",
        "मो": "Mob.: 9860180649",
        "Email": "sanjivdaporkar@gmail.com"
    },
    {
        "पद": "संघटन मंत्री ",
        "नाव": "श्री जयराम लसू चौधरी  ",
        "पत्ता": "C/o, वनवासी कल्याण आश्रम महाराष्ट्र \n15, कृषि नगर कॉलेज रोड \nनाशिक - 422 005",
        "मो": "Mob.: 8806510837\nTel.: 0253-2577491, 2582429\nFax: 0253-2310307",
        "Email": "jayaramchaudhari2@gmail.com"
    },
    {
        "पद": "प्रांत कार्यालय",
        "नाव": "वनवासी कल्याण आश्रम महाराष्ट्र ",
        "पत्ता": "वनवासी कल्याण आश्रम महाराष्ट्र \n15, कृषि नगर कॉलेज रोड \nनाशिक - 422 005",
        "मो": "Tel.: 0253-2577491/2582429\nFax: 0253-2310307",
        "Email": "vkanasik@gmail.com"
    }
]

const looper = () => {
    data.map(async (e) => {
        // if (window.confirm("Are You Sure To add " + e.name)) {
        const docRef = await addDoc(collection(db, "employes_prant"), {
            name: e.नाव,
            job: e.पद,
            address: e.पत्ता,
            position: "Prant Work",
            contact_no: e.मो,
            email:e.Email,
            prant_id: "GjVLY9skC3AdqtaGuuC5"
        });
        console.log(e.name + " added");
        // } else {
        // alert(e.name + " Discarded");
        // }
    })
}

looper();