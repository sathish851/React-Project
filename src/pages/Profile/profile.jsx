import './profile.css'
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../components/Loading/loading';

const Profile = () =>{
    const user_id = useSelector((state)=> state.auth.user_id.payload)
    const isLoggedIn = useSelector((state) =>state.auth.isLoggedIn);
    console.log(user_id);
    console.log(isLoggedIn)
    const [username,Setusername] = useState("");
    const [userBio,SetuserBio] = useState("Go And Edit Your Profile");
    const [instaLink,SetinstaLink] = useState('');
    const [linkedLink,SetlinkedLink] = useState('');
    const [loading,setloading] =  useState(true);

    /*if(loggedIn){
        
    console.log(loggedIn);
        Axios.post("http://localhost:3050/api/user/profile",{
            user_id:user_id,
        }).then((response) => {
            console.log(response)
            Setusername(response.data)
        })
    }*/

    const getpro = async()=>{
    
        if(user_id > 0){
            Axios.post("http://localhost:3050/api/user/profile",{
        user_id:user_id,
        }).then((response) => {
            console.log(response.data[0])
            Setusername(response.data[0].username)
            SetuserBio(response.data[0].bio)
            SetinstaLink(response.data[0].insta_link)
            SetlinkedLink(response.data[0].linkedin)
        })    
        }
        setloading(false)
    }

    useEffect(() => {
        getpro()
    });
/*
    useEffect(
        Axios.post("http://localhost:3050/api/user/profile",{
            username:username,
        }).then((response) => {
            
        })
    )*/
    
        if(isLoggedIn == true){
            return(
                <div>
                {
                    loading ? <Loading/> : <div><div className='profile'>
                    
                    <div className='profile_content'>
                        <div className='profile_details'>
                            <div className='profile_details_content'>
                                <div className='profile_username'>{username}</div>
                                <div className='line'></div> 
                                <div className='profile_user_bio' >{userBio}</div>
                                <div className='socialMedia_container'>
                                    <div className='socialMedia_instagram'></div>
                                    <div className='socialMedia_linkedin'></div>
                                </div>
                            </div>
        
                        </div>
                        <div className='profile_image'>
                            <img src={require("./profile_image.png")} alt="h" />
                        </div>
                    </div>
                </div></div>
                }
                </div>
            )
        }else{
            return(
                <div>login</div>
            )
        }
}

export default Profile;