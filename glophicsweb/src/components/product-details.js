import Product from "./product.js";
import product1 from '../images/product1.webp';
import product2 from '../images/2.png';
import product3 from '../images/3.png';
import product4 from '../images/4.png';
import product5 from '../images/5.png';
import product6 from '../images/6.png';



const Proddetails = () => {
    return ( 
        <div className="product-cont">
            <Product image={product1} date="Jul 23 2023" label="Japanese Skin Care & Facial Products" expl="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eligendi aperiam ex omnis qui voluptatem eaque."></Product>
            <Product image={product2} date="Jul 23 2023" label="Japanese Skin Care & Facial Products" expl="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eligendi aperiam ex omnis qui voluptatem eaque."></Product>
            <Product image={product3} date="Jul 23 2023" label="Japanese Skin Care & Facial Products" expl="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eligendi aperiam ex omnis qui voluptatem eaque."></Product>
            <Product image={product4} date="Jul 23 2023" label="Japanese Skin Care & Facial Products" expl="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eligendi aperiam ex omnis qui voluptatem eaque."></Product>
            <Product image={product5} date="Jul 23 2023" label="Japanese Skin Care & Facial Products" expl="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eligendi aperiam ex omnis qui voluptatem eaque."></Product>
            <Product image={product6} date="Jul 23 2023" label="Japanese Skin Care & Facial Products" expl="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eligendi aperiam ex omnis qui voluptatem eaque."></Product>
        </div>
     );
}
 
export default Proddetails;