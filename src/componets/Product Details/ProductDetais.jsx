
import Footer from '../Footer/Footer';
import Header from '../Header/header';
import './ProductDetails.css'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../Firebase/Config';
import { PostContext } from '../Firebase/postContext';
import { useContext } from 'react';

function ProductDetais() {

    const usersCollectionRef = collection(db, 'Users');
    const [user, setUser] = useState([]);

    const { postDetails } = useContext(PostContext);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (postDetails && postDetails.userId) {
                    const q = query(usersCollectionRef, where('userUid', '==', postDetails.userId));
                    const querySnapshot = await getDocs(q);

                    setUser(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <>
            <Header />
            <div className="viewParentDiv mx-20">
                {postDetails ? (
                    <div className='flex container mt-10'>
                        <div className="imageShowDiv">
                            <img src={postDetails.url} alt="" />
                        </div>
                        <div className="rightSection">
                            <div className="productDetails">
                                <p>₹ {postDetails.price}</p>
                                <span>{postDetails.productName}</span>
                                <p>{postDetails.category}</p>
                                <p>{postDetails.location}</p>
                                <span>Tue May 04 2023</span>
                            </div>
                            {user.map((user, index) => {
                                return (
                                    <div key={index} className="contactDetails">
                                        <p>Seller details</p>
                                        <p>{user.name}</p>
                                        <p>{user.mobile}</p>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                ) : (
                    <p>No product details available</p>
                )}
            </div>
            <Footer />
        </>
    );
}

export default ProductDetais;
