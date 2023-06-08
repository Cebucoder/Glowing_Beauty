import '../css/login.css';

const Loginform = () => {

    function closeForm(){
        let closeBtn = document.getElementById("show-login");
        let cloeForm  = document.getElementById("form");
        let body = document.body;
        closeBtn.classList.remove("show-form");
        cloeForm.classList.remove("show-login-form");
        body.classList.remove("disable-scroll");
    }

    return ( 
        <div className="login-popup" id='show-login'>
            <form>
                <div className="login-form" id='form'>
                    <span className="close-btn" onClick={closeForm}>
                        <ion-icon name="close-outline"></ion-icon>
                    </span>

                    <label htmlFor="">Login</label>

                    <div className="input-from">
                        <div className="inputbox">
                            <span>
                                Username *
                            </span>
                            <input  type="email"/>
                        </div>

                        <div className="inputbox">
                            <span>
                                Password *
                            </span>
                            <input type="password" />
                        </div>
                    </div>

                    <button>Login</button>

                    <div className="Forgot_password">Forgot password?</div>

                </div>
            </form>
        </div>
     );
}
 
export default Loginform;