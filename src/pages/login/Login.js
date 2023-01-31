import React, { useState } from "react";
import "./Login.css"
import { motion } from "framer-motion";
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";

const Login = () =>{

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) =>state.auth.isLoggedIn);
        
    console.log(isLoggedIn);

    const [loginState, setLoginState] = useState('');

    function handleLogin(){    
        Axios.post("http://localhost:3050/api/user/login",{
            username:username,
            password:password,
        }).then((response) => {
            setLoginState(response.data);
            if(loginState == "success"){
                navigate('/register');
            }
        })
    }
    return(
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >
            
        <body>

    <div class="back">
        <div class="login_box">
            <div id="box">
                <div id="welcome">
                    <h2>Welcome Back!</h2> 
                </div>
                <div id="login_boxs">
                    <div id="">
                        <p>Username</p>
                        <div id="input_box_log">
                            <input value={username} type="text" id="username" placeholder="Username" 
                            onChange={
                                (e)=>{
                                    setUsername(e.target.value);
                                }
                            }
                            />
                        </div>
                    </div>
                    <div>
                        <p>Password</p>
                        <div id="input_box_log">
                            <input value={password} type="password" id="pass" placeholder="Password" 
                                onChange={
                                    (e) => {
                                        setPassword(e.target.value)
                                    }
                                }
                            />
                        </div>    
                    </div>

                    <motion.button id="login_button"
                        whileHover={{scale:1.1}}
                        whileTap = {{scale:0.9}}
                        onClick = {
                            ()=>{
                                handleLogin();
                            }
                        }
                    >
                        Login
                    </motion.button>
                    <br>
                    </br>
                    <button id="dont" onClick={()=>{
                        navigate('/register');
                    }}>
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

</motion.div>
    );
};

export default Login;