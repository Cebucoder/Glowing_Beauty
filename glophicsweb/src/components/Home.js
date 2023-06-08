import banner from '../images/banner.webp';
import Loginform from './login';
import LoadEffect from './load-effect';

import '../css/home.css';
const Home = () => {
    return ( 
        <div className="main-container">
            <div className="banner">
                <img src={banner} alt="" />
                <div className="overlay">
                    <h1>Japan's Exquisite Skincare Secret</h1>
                    <span>Explore more</span>
                </div>
            </div>

            <Loginform></Loginform>
            <LoadEffect></LoadEffect>

            
        </div>
     );
}
 
export default Home;