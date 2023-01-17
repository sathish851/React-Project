import React from "react";
import "./Login.css"

const Login = () =>{
    return(
        <body>
    <div class="back">
        <div class="login_box">
            <div id="box">
                <div id="welcome">
                    <h2>Welcome Back!</h2> 
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
                    <button id="login_button">
                        Login
                    </button>
                    <button id="dont">
                        Don't have an account!
                    </button>
                </div>
            </div>
        </div>
        <div class="login_banner">
            <div id="banner">
                <p id="banner_log">LOGIN</p>
            </div>
        </div>
    </div>
</body>
    );
};

export default Login;