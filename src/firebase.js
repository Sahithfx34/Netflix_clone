
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc,collection,getFirestore}  from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBp8SlIS8MiHClboVZlIqTbQD6Cs1EYj14",
  authDomain: "netflix-clone-26781.firebaseapp.com",
  databaseURL: "https://netflix-clone-26781-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-26781",
  storageBucket: "netflix-clone-26781.firebasestorage.app",
  messagingSenderId: "464451418977",
  appId: "1:464451418977:web:70d504b2a2a1f352b3e320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async(name,email,password)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider: "local",
            email,
        });
    }catch(err){
        console.log(err);
        toast.error(err.code.split("/")[1].split('-').join(" "));
    }

}

const login = async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }catch(err){
        console.log(err);
        toast.error(err.code.split("/")[1].split('-').join(" "));

    }
}

const logout =()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout};