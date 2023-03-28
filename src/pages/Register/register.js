import "./register.css";
import {React,useState} from 'react';
import Axios from 'axios';
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
const Register = ()=>{
    
    const [regState,setregState] = useState('');
    const navigate = useNavigate();
    const [username,Setusername] = useState("");
    const [password,Setpassword] = useState("");
    const [Role,SetRole] = useState("");
    const [DOB,SetDOB] = useState("");
    const [Email,SetEmail] = useState("");
    const customizedMiddleware = getDefaultMiddleware({
        serializableCheck: false
    })
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    const register = ()=>{
        
        Axios.post("http://localhost:3050/api/user",{
            username: username,
            password:password,
            role:Role,
            date_of_birth: DOB,
            email:Email
        }).then((response)=>{
            console.log(response)
            setregState(response.data);
        });

    }

    function Logindone(){
        var email = Email;
        
        if (validateEmail(email)) {
            
            register();
        } else {
            setregState("Email is not valid");
        }
    };

    
    return(
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >

        <div className="register-body">

        <div id="back_register">

            <div id="error_msg">
                <div>
                    {regState}
                </div>
            </div>
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
                        <div id="flex_row">
                            <div id="flex_col">
                                <p>Username</p>
                                <div id="input_box">
                                    <input name="username" value={username} onChange={(e)=>{Setusername(e.target.value)}} type="text" id="username" placeholder="Username" required />
                                </div>
                            </div>
                            <div id="flex_col">
                                <p>Password</p>
                                <div id="input_box">
                                    <input name="password" value={password} onChange={(e)=>{Setpassword(e.target.value)}} type="password" id="pass" placeholder="Password" required />
                                </div>
                            </div>
                        </div>
                        <div id="flex_row">
                            <div id="flex_col">
                                <p>Role</p>
                                <div id="input_box">
                                    <input name="Role" value={Role} onChange={(e)=>{SetRole(e.target.value)}} type="text" id="username" placeholder="Role" required />
                                </div>
                            </div>
                            <div id="flex_col">
                                <p>Date of Birth</p>
                                <div id="input_box">
                                    <input name="DOB" value={DOB} onChange={(e) =>{SetDOB(e.target.value)}} type="date" id="pass" placeholder="Date of Birth" required />
                                </div>
                            </div>
                        </div>
                        
                        <div id="flex_col">
                            <p>Email</p>
                            <div id="email_input_box">
                                <input name="Email" value={Email} onChange={(e)=>{SetEmail(e.target.value)}} type="text" id="username" placeholder="Email" required />
                            </div>
                        </div>
                        
                        <motion.button id="login_button" onClick={Logindone}
                            whileHover={{scale:1.1}}
                            whileTap = {{scale:0.9}}
                        >
                            Register
                        </motion.button>
                        <button id="dont" onClick={()=>{
                            navigate('/login');
                        }}>
                            Already have an account.
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </motion.div>
    );
};

export default Register;