import './createGroup.css'
import Axios from 'axios';
import { useSelector } from "react-redux";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateGroup = () => {
    const user_id = useSelector((state)=> state.auth.user_id.payload)
    const [groupName,SetgroupName] = useState("");
    const [groupCode,setgroupCode] =useState("");
    const [groupDescription,setgroupDescription] =useState("");
    const navigate = useNavigate();
    function handleCreate(){
        Axios.post("http://localhost:3050/api/group/create",{
            groupName:groupName,
            groupCode:groupCode,
            adminId:user_id,
            groupDescription:groupDescription

        }).then((response)=>{
            if(response.data == "Group Created"){
                navigate("/user/group")
            }
            console.log(response.data)
        })
    }
    return(
        <div className="createGroup-body">
            <div className='createGroup-box'>
                <div className='createGroup-header'>
                    <div className='createGroup-header-text'>
                        CREATE GROUP
                    </div>
                </div>

                <div className='createGroup-content flex-column'>
                    <div className='createGroup-flex-row'>
                        <div className='flex-column'>
                            <div className='createGroup-inputBox-text'>Group Name</div>
                            <input className=' createGroup-inputBox' onChange={(e)=>{SetgroupName(e.target.value)}} />

                        </div>
                        <div className='flex-column '>
                            <div className='createGroup-inputBox-text'>Group Code</div>
                            <input className=' createGroup-inputBox' onChange={(e)=>{setgroupCode(e.target.value)}}/>
                            
                        </div>

                    </div>
                    <div className='flex-column-task'>
                        <div className='createGroup-inputBox-text'>Description</div>
                        <textarea name="Text1" cols="45" rows="5" className='createGroup-content-about' onChange={(e)=>{setgroupDescription(e.target.value)}}></textarea>
                    </div>
                    <div className='createGroup-buttons'>
                        <button className='createGroup-button-cancel createGroup-button-text' onClick={()=>{navigate(-1)}}>CANCEL</button>
                        <button className='createGroup-button-create createGroup-button-text' onClick={()=>{handleCreate()}}>CREATE</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreateGroup;
