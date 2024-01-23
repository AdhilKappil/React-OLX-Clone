
import './Header.css';
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Firebase/context';
import { useContext } from 'react';


function Header() {

    const {user} = useContext(AuthContext)

    return (
        <div className="headerParentDiv px-32">
            <div className="headerChildDiv ">
                <div className="brandName">
                    <img style={{ width: '50px', height: '30px' }} src="/Images/olx-icone.png" alt="" />
                </div>
                <div className="placeSearch">
                    <IoIosSearch size={20} />
                    <input type="text" />
                    <IoIosArrowDown size={30} />
                </div>
                <div className="productSearch">
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Find Cars, Mobile Phones and more..."
                        />
                    </div>
                    <div className="searchAction">
                        <IoSearch color='white' size={25} />
                    </div>
                </div>
                <div className="language">
                    <span> ENGLISH </span>
                    <IoIosArrowDown size={30} />
                </div>
                <div className="loginPage">
                    <Link to="/Login" className='text-base font-medium'>
                        {user? user.displayName : 'Login'}
                    </Link>
                    <hr />
                </div>
                {/* <div className=' h-10 w-32 flex space-x-2 mt-3'>
            <div className='rig-icones'> <FiMessageCircle size={23}/></div>
            <div className='rig-icones'><FaRegBell size={23}/></div>
            <div className='rig-icones'></div>
            <div className='rig-icones'></div>
        </div> */}

             <Link to={'/Sell'}>
                <button className='nav-text px-6 py-1 bg-white rounded-3xl sell-button flex items-center'>
                    <FaPlus className='mr-1' />SELL</button>
             </Link>
            </div>
            <div className="w-full shadow-md pb-2 mt-0">
                <div className='h-12 mx-auto flex items-end justify-around text-[#002f34]'>
                    <div className='nav-lite font-semibold'>ALL CATEGORIES</div>
                    <div className='nav-lite'>Cars</div>
                    <div className='nav-lite'>Motorcycles</div>
                    <div className='nav-lite'>Mobile Phones</div>
                    <div className='nav-lite'>For Sale: Houses & Apartments</div>
                    <div className='nav-lite'>Scooters</div>
                    <div className='nav-lite'>Commercial & Other Vehicles</div>
                    <div className='nav-lite'>For Rent: Houses & Apartments</div>
                </div>
            </div>
        </div>
        
    );
}


export default Header;