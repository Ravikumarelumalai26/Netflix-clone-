
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword ,signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBhajxboVivGJmjy_zDvZW5SEOsBywgdMM",
  authDomain: "netflix-clone-d915b.firebaseapp.com",
  projectId: "netflix-clone-d915b",
  storageBucket: "netflix-clone-d915b.firebasestorage.app",
  messagingSenderId: "918298552401",
  appId: "1:918298552401:web:5ee6426533f254dbfdb070"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name,
      authProvider: "local",
      email: email,
    });

    console.log("User created successfully!");
  } catch (error) {
    console.error("Error creating user:", error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};
const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(' '));
      
    }
  };
  
  const logout = () => {
    signOut(auth);
  };
  
  export { auth, db, login, signup, logout };