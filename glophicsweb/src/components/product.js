// import product1 from '../images/product1.webp';
// import Proddetails from './product-details';

import '../css/product.css';

const Product = (details) => {
    return (  
        // <div className="product-cont">
            <div className="product-card">
                
                <div className="product-img">
                    <div className="sticker">
                        <small>Recommended</small>
                    </div>
                    
                    <img src={details.image} alt="" />
                </div>
                <div className="product-details">
                    <small>{details.date}</small>
                    <label>Japanese Skin Care & Facial Products</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eligendi aperiam ex omnis qui voluptatem eaque. </p>
                    <button>Read More</button>
                </div>
            </div>
        // </div>
        
    );
}
 
export default Product;