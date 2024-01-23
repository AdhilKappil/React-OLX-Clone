import './Sell.css'
import { useContext, useState } from 'react'
import { db, storage } from "../Firebase/Config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { AuthContext } from '../Firebase/context';


function Sell() {

    const [productName, setProductName] = useState(' ')
    const [location, setLocation] = useState(' ')
    const [category, setCategoty] = useState(' ')
    const [price, setPrice] = useState(' ')
    const [file, setFile] = useState();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const date = new Date();

    const usersCollectionRef = collection(db, "Products");

    const createProducts = async () => {

        const storageRef = ref(storage, `/images/${file.name}`);

        // Upload the image
        await uploadBytes(storageRef, file);

        // Get the download URL of the uploaded image
        const downloadURL = await getDownloadURL(storageRef);

        // Log or use the download URL as needed
        console.log('Image uploaded. Download URL:', downloadURL);

        await addDoc(usersCollectionRef, {
            productName,
            price: Number(price),
            location,
            category,
            url: downloadURL,
            userId: user.uid,
            date:date.toString()
        }).then(() => {
            navigate("/")
        })
    };

    function handleChange(e) {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }


    return (
        <div>
            <div className='flex justify-center mt-12 '>
                <div className="Main-Content ">
                    <p className='text-2xl font-black m-8'>Add your Product Details</p>
                    <input onChange={(event) => setProductName(event.target.value)} type="text" className="placeSearch-Login mt-8 ml-6 p-2" placeholder='Product Name' />
                    <input onChange={(event) => setCategoty(event.target.value)} type="text" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Category' />
                    <input onChange={(event) => setPrice(event.target.value)} type="number" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Price' />
                    <input onChange={(event) => setLocation(event.target.value)} type="text" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Location' />
                    <input onChange={handleChange} type="file" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Image' />
                    <div className='h-40 mx-10 mt-4 overflow-hidden'>
                        <img src={(file) && URL.createObjectURL(file)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <button onClick={createProducts} className={`rounded-full text-white bg-teal-700 border-2 h-10 w-64 ml-16 mt-2 hover:border-blue-500`}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sell