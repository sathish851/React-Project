import "./register.css";
import {React,useState} from 'react';

const Register = ()=>{


    const [data,setData] = useState({
        username:"",
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


    function Logindone(){


    };

    
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
                        <div id="flex_row">
                            <div id="flex_col" >
                                <p>Username</p>
                                <div id="input_box">
                                    <input name="username" value={username} onChange={changeHandler} type="text" id="username" placeholder="Username" />
                                </div>
                            </div>
                            <div id="flex_col">
                                <p>Password</p>
                                <div id="input_box">
                                    <input name="password" value={password} onChange={changeHandler} type="password" id="pass" placeholder="Password" />
                                </div>
                            </div>
                        </div>
                        <div id="flex_row">
                            <div id="flex_col">
                                <p>Role</p>
                                <div id="input_box">
                                    <input name="Role" value={Role} onChange={changeHandler} type="text" id="username" placeholder="Role" />
                                </div>
                            </div>
                            <div id="flex_col">
                                <p>Date of Birth</p>
                                <div id="input_box">
                                    <input name="DOB" value={DOB} onChange={changeHandler} type="date" id="pass" placeholder="Date of Birth" />
                                </div>
                            </div>
                        </div>
                        <p>Email</p>
                        <div id="email_input_box">
                            <input name="Email" value={Email} onChange={changeHandler} type="text" id="username" placeholder="Email" />
                        </div>
                        
                        <button id="login_button" onClick={Logindone}>
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