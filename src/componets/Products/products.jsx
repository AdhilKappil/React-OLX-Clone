import { Link } from 'react-router-dom';
import './products.css'
import { FaRegHeart } from "react-icons/fa";

function Products() {
  return (
    <>
      <div className="h-28"></div>
      <div className="flex-container mt-9">
      <Link to={"/ProductDetails"}>
        <div className="card">
          <div className="card-image-container flex items-start justify-end">
            <div className='bg bg-white h-10 w-10 absolute rounded-full m-1 p-2'>
            <FaRegHeart size={24}/></div>
            <img src="/Images/Screenshot 2024-01-13 101857.png" alt="" />
          </div>
          <p className="card-title">₹ 2,95,000</p>
          <p className="card-des">jhfdkjhfjkdhfkhd </p>
        </div>
      </Link>

      </div>
    </>
  )
}

export default Products