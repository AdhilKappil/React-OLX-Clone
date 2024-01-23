import { useState} from 'react';
import './Auth.css';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../Firebase/Config';
import { db } from "../Firebase/Config";
import { collection, addDoc} from "firebase/firestore";
import { useNavigate } from 'react-router-dom'; 

    
function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [newName, setName] = useState("");
    const [newMobile, setMobile] = useState("");
    const [newEmail, setEmail] = useState("");
    const [newPassword, setPassword] = useState("");

    const [email, setEmailLogin] = useState('');
    const [password, setPasswordLogin] = useState('');

    const navigate = useNavigate();

    // const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "Users");

    // const createUser = async () => {
    //     await addDoc(usersCollectionRef, { name: newName, mobile: Number(newMobile),
    //                                      email: newEmail, password: newPassword });
    // };

    const handleToggleForm = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    };

    const onSubmit = async (e) => {
        console.log('submit');
        e.preventDefault()
       
        await createUserWithEmailAndPassword(auth, newEmail, newPassword)
          .then((userCredential) => {
              // Signed in
               
              const user = userCredential.user;
              updateProfile(user, { displayName: newName }).then(()=>{
                addDoc(usersCollectionRef, { name: newName, mobile: Number(newMobile),userUid:user.uid}).then(()=>{
                    setIsLogin(false)
                        navigate("/");
                    })
              })
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });
     
      }

      const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }


    return (
        <div className='flex justify-center mt-16'>
            <div className="Main-Content grid grid-cols-1 ">
                <div className='h-full flex justify-center items-center'>
                    <img className='h-40' src="/Images/olx-img.png" alt="" />
                </div>
                <div className='h-full '>
                    { // Additional fields for registration
                        !isLogin ?
                            <>
                                <input onChange={(event) => { setName(event.target.value); }} type="text" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Name' />
                                <input onChange={(event) => { setMobile(event.target.value) }} type="text" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Mobile' />
                                <input onChange={(event) => { setEmail(event.target.value); }} type="text" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Email' />
                                <input onChange={(event) => { setPassword(event.target.value);}} type="text" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Password' />
                            </>
                            :
                        <>
                         <input onChange={(event) => { setEmailLogin(event.target.value); }} type="text" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Email' />
                        <input onChange={(event) => { setPasswordLogin(event.target.value);}} type="text" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Password' />
                        </>
                    }
                </div>
                <div className='h-full font-bold from-neutral-600 grid justify-center items-start'>
                    {isLogin ?
                        <button onClick={onLogin}  className={`rounded-full text-white bg-teal-700 border-2 h-10 w-64 hover:border-blue-500`}>
                            Login
                        </button> :
                        <button onClick={onSubmit} className={`rounded-full bg-teal-700 text-white border-2 h-10 w-64 hover:border-blue-500`}>
                            Signup
                        </button>
                    }
                    <div className='flex justify-center hover:cursor-pointer' onClick={handleToggleForm}>
                        {isLogin ? 'Create New Account' : 'Already have an account? Login'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
