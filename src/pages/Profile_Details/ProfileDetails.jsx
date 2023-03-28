import './ProfileeDetails.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from "react-redux";
import Axios from 'axios';
const ProfileDetails = () =>{
    const user_id = useSelector((state)=> state.auth.user_id.payload)
    const [bio, setbio] = useState('')
    const [insta, setinsta] = useState('')
    const [linkedin, setlinkedin] = useState('')
    const navigate= useNavigate();
    function handelUpdate(){
        Axios.post("http://localhost:3050/api/userprofiledetails",{
            user_id:user_id,
            bio:bio,
            insta:insta,
            linkedin:linkedin
        }).then((response)=>{
            if(response.data == "updated"){
                navigate("/user/profile")
            }
            console.log(response.data)
        })
    }
    return(
        <div className="profileDetails-body">
            <div className="profileDetails-box">
                <div className="profileDetails-header">
                    PROFILE DETAILS
                </div>
                <div className="profileDetails-content">
                    <div className='profileDetails-content-box'>
                        <div className='profileDetails-bio-text'>Bio</div>
                        <textarea cols="40" rows="5" className='profileDetails-bio' onChange={(e)=>{setbio(e.target.value)}}></textarea>
                    </div>
                    <div className='profileDetails-content-box'>
                        <div className='profileDetails-bio-text' >Instagram</div>
                        <input type="text" className='profileDetails-inputBox' onChange={(e)=>{setinsta(e.target.value)}}/>
                    </div>
                    <div className='profileDetails-content-box'>
                        <div  className='profileDetails-bio-text'>Linked In</div>
                        <input type="text" className='profileDetails-inputBox' onChange={(e)=>{setlinkedin(e.target.value)}} />
                    </div>
                </div>
                <div className="profileDetails-buttons">
                    <button className='profileDetails-button-update' onClick={()=>{handelUpdate()}}>UPDATE</button>
                </div>
            </div>
        </div>
    )
}
export default ProfileDetails;