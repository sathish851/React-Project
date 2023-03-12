import './profile.css'
import React, { useState } from 'react';

const Profile =() =>{

    const [username,Setusername] = useState("Username");
    const [userBio,SetuserBio] = useState("I am Tech Enthusiast and interest in UI / UX.  i actually gaming lot and do so much dumb things when i play video games. since childhood i got passionate in video editing also.we bring rain not a showers");
    
    return(
        <div className='profile'>
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
        </div>
    )
}

export default Profile;