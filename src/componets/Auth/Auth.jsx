import { useState } from 'react';
import './Auth.css';

function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggleForm = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    };

    return (
        <div className='flex justify-center mt-16'>
            <div className="Main-Content grid grid-cols-1 grid-rows-3 gap-y-2">
                <div className='h-full flex justify-center items-center'>
                    <img className='h-40' src="/Images/olx-img.png" alt="" />
                </div>
                <div className='h-full '>
                    { // Additional fields for registration
                        !isLogin && (
                            <>
                                <input type="text" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Name' />
                            </>
                        )
                    }
                    <input type="text" className="placeSearch-Login mt-10 ml-6 p-2" placeholder='Email' />
                    <input type="text" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Password' />
                </div>
                <div className='h-full font-bold from-neutral-600 grid justify-center items-start'>
                {isLogin?
                    <button className={`rounded-full border-2 h-10 w-64 hover:border-blue-500`}>
                        Login
                    </button>:
                    <button className={`rounded-full border-2 h-10 w-64 hover:border-blue-500 mt-10`}>
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
