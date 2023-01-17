import "./register.css";

const Register = ()=>{
    return(
        <body>
    <div class="back">
        <div class="register_banner">
            <div id="banner">
                <p id="banner_log">REGISTER</p>
            </div>
        </div>

        <div class="register_box">
            <div id="box">
                <div id="welcome">
                    <h2>Welcome</h2> 
                </div>
                <div id="login_boxs">
                    <p>Username</p>
                    <div id="input_box">
                        <input type="text" id="username" placeholder="Username" />
                    </div>
                    <p>Password</p>
                    <div id="input_box">
                        <input type="password" id="pass" placeholder="Password" />
                    </div>
                    <p>Email</p>
                    <div id="input_box">
                        <input type="text" id="username" placeholder="Email" />
                    </div>
                    <button id="login_button">
                        Register
                    </button>
                    <button id="dont">
                        Already have an account.
                    </button>
                </div>

            </div>
        </div>
        
    </div>
    
</body>
    );
};

export default Register;