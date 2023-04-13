import { useNavigate } from 'react-router-dom';
import './home.css'

const Home = ()=>{

    const navigate= useNavigate();
    function directToLogin(){
        navigate("/login")
    }
    function directToRegister(){
        navigate("/register")
    }
    

    return(
        <div className="home-body">
            <img src= {require("./TV.png")} className="home-bg" />
            <button className='home-text-login home-text' onClick={directToRegister}>Sign Up</button>
            <button className='home-text-signup home-text' onClick={directToLogin}>Login</button>
        </div>
    )
}

export default Home;