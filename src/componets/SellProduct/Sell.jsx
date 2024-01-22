import './Sell.css'

function Sell() {


  return (
    <div>
        <div className='flex justify-center mt-16'>
            <div className="Main-Content ">
                <p className='text-2xl font-black m-12'>Add your Product Details</p>
              <input type="text" className="placeSearch-Login mt-10 ml-6 p-2" placeholder='Product Name' />
                <input type="text" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Product Brand' />
                <input type="text" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Price' />
                <input type="file" className="placeSearch-Login mt-5 ml-6 p-2" placeholder='Image' />
                </div>
                <div className='h-full font-bold from-neutral-600 grid justify-center items-start'>
               
            </div>
        </div>
    </div>
  )
}

export default Sell