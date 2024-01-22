import Footer from '../Footer/Footer';
import Header from '../Header/header';
import './ProductDetails.css'

function ProductDetais() {
    return (
        <div>
              <Header/>
        <div className="viewParentDiv mx-20">
            <div className="imageShowDiv">
                <img src="/Images/image.jpeg" alt=""/>
            </div>
            <div className="rightSection">
                <div className="productDetails">
                    <p>&#x20B9; 250000 </p>
                    <span>YAMAHA R15V3</span>
                    <p>Two Wheeler</p>
                    <span>Tue May 04 2021</span>
                </div>
                <div className="contactDetails">
                    <p>Seller details</p>
                    <p>No name</p>
                    <p>1234567890</p>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default ProductDetais;
