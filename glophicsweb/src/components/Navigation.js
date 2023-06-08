import logo from '../images/Glowing1.png';

import '../css/navigation.css';

const Navigation = () => {

    function LoginForm() {
        let form = document.getElementById("show-login");
        let login = document.getElementById("form");
        let body = document.body;
    
        login.classList.add("show-login-form");
        form.classList.add("show-form");
        body.classList.add("disable-scroll");
    
        // Function to enable scrolling again when the form is closed
        // function enableScroll() {
        //     body.classList.remove("disable-scroll");
        // }
    
        // Add an event listener to listen for when the form is closed
        // form.addEventListener("click", enableScroll);
    }


    
   


    return ( 
        <div className="navigation">
           <div className="logo">
            <img src={logo} alt="" />
           </div>

           <div className="navlink">
            <li onClick={LoginForm}>Login</li>
            <span></span>
            <li>Become a Distributor</li>
           </div>

           <div className="menu-bar">
                <ion-icon name="menu"></ion-icon>
            </div>

            {/* <div className="mencont">

            </div> */}

            

        </div>
     );
}
 
export default Navigation;