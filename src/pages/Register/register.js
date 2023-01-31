import "./register.css";
import {React,useState} from 'react';
import Axios from 'axios';
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";

const Register = ()=>{

    const [regState,setregState] = useState('');
    const navigate = useNavigate();
    const [data,setData] = useState({
        username:'',
        password:"",
        Role:"",
        DOB:"",
        Email:"",
    });

    const {username,password,Role,DOB,Email} = data;

    const changeHandler = e =>{
        setData({
            ...data,
            [e.target.name]:[e.target.value]
        });
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$   /;
        return re.test(String(email).toLowerCase());
    }

    const register = ()=>{
        
        Axios.post("http://localhost:3050/api/user",{
            username: String(data.username),
            password:String(data.password),
            role:String(data.Role),
            date_of_birth: data.DOB,
            email:String(data.Email)
        }).then((response)=>{
            console.log(response)
            setregState(response.data);
        });

    }

    function Logindone(){
        var email = data.Email;
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

        <body>

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
                                    <input name="username" value={username} onChange={changeHandler} type="text" id="username" placeholder="Username" required />
                                </div>
                            </div>
                            <div id="flex_col">
                                <p>Password</p>
                                <div id="input_box">
                                    <input name="password" value={password} onChange={changeHandler} type="password" id="pass" placeholder="Password" required/>
                                </div>
                            </div>
                        </div>
                        <div id="flex_row">
                            <div id="flex_col">
                                <p>Role</p>
                                <div id="input_box">
                                    <input name="Role" value={Role} onChange={changeHandler} type="text" id="username" placeholder="Role" required/>
                                </div>
                            </div>
                            <div id="flex_col">
                                <p>Date of Birth</p>
                                <div id="input_box">
                                    <input name="DOB" value={DOB} onChange={changeHandler} type="date" id="pass" placeholder="Date of Birth" required/>
                                </div>
                            </div>
                        </div>
                        
                        <div id="flex_col">
                            <p>Email</p>
                            <div id="email_input_box">
                                <input name="Email" value={Email} onChange={changeHandler} type="text" id="username" placeholder="Email" required />
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
    </body>
    </motion.div>
    );
};

export default Register;