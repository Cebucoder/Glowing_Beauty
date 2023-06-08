import '../css/load.css';
import loadImge from '../images/Glowing1.png'

const LoadEffect = () => {

    window.onload = function() {
        let loadCont = document.getElementById("load-container");
        let loadImg = document.getElementById("load-img");
        let body = document.body;

      
        loadCont.classList.add("show-load-cont");
        loadImg.classList.add("show-load-img");
        body.classList.add("load-scroll");
      
        setTimeout(function() {
          loadCont.classList.remove("show-load-cont");
          loadImg.classList.remove("show-load-img");
          body.classList.remove("load-scroll");

        }, 2000);
      };
      
      
      

    return ( 
        <div className="load-container" id="load-container">
            <div className="load-img" id="load-img">
                <img src={loadImge} alt="" />
            </div>
        </div>
     );
}
 
export default LoadEffect;