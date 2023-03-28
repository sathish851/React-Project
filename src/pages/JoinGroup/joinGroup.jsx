import { useState } from 'react';
import './joinGroup.css'
import { useNavigate } from 'react-router-dom';

import { useSelector } from "react-redux";
import Axios from 'axios';

const JoinGroup = () => {
    const user_id = useSelector((state)=> state.auth.user_id.payload)
    const [code,Setcode] = useState("");
    const [joinrequest,Setjoinrequest] = useState("");
    const navigate = useNavigate();
    
    function handlejoin(){
        Axios.post("http://localhost:3050/api/group/join",{
            user_id:user_id,
            code:code,
            req_descript:joinrequest
        }).then((response)=>{
            if(response.data == "request has sent"){
                navigate("/user/group")
            }
            console.log(response.data)
        })
    }
    return(
        <div className="joinGroup-body">
            <div className='joinGroup-box'>
                <div className='joinGroup-header'>
                    <div className='joinGroup-header-text'>
                        JOIN GROUP
                    </div>
                </div>

                <div className='joinGroup-content flex-column'>
                    <div className='joinGroup-flex-row'>
                        <div className='flex-column'>
                            <div className='joinGroup-inputBox-text'>Group Code</div>
                            <input className=' joinGroup-inputBox' onChange={(e)=>{Setcode(e.target.value)}} />

                        </div>
                        <div className='flex-column '>
                            <div className='joinGroup-inputBox-text'>Secret Code</div>
                            <input className=' joinGroup-inputBox' />
                            
                        </div>

                    </div>
                    <div className='flex-column-about'>
                        <div className='joinGroup-inputBox-text'>Request</div>
                        <textarea name="Text1" cols="40" rows="5" className='joinGroup-content-about' onChange={(e)=>{Setjoinrequest(e.target.value)}}></textarea>
                    </div>
                    <div className='joinGroup-buttons'>
                        <button className='joinGroup-button-cancel joinGroup-button-text' onClick={()=>{navigate(-1)}}>CANCEL</button>
                        <button className='joinGroup-button-create joinGroup-button-text' onClick={()=>{handlejoin()}}>CREATE</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default JoinGroup;
