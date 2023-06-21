import '../css/footer.css';
import logo from '../images/Glowing1.png';

const Footer = () => {
    return ( 
        <div className="Footer-container">
           <div className="load-more">
            <span>Load More</span>
           </div>

            <div className="join-team">
                <label htmlFor="">Become a member</label>
                <span>Join Now</span>
            </div>

            <div className="address-social">
                <div className="email-address">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <small>info@glowingb.com.ph</small>
                </div>

                <div className="address">
                    <small>123 Sakura Street, </small>
                    <small>Tokyo, Japan</small>

                    <div className="social">
                        <span></span>
                    </div>

                </div>
            </div>

            <div className="reserved">
                <small>© Copyright 2023 | All Rights Reserved | GlowingB.com.ph</small>
            </div>

        </div>
     );
}
 
export default Footer;