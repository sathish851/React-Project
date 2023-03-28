import { useEffect, useState } from 'react';
import './createTask.css'
import Axios from 'axios';

import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
const CreateTask = () =>{
    const user_id = useSelector((state)=> state.auth.user_id.payload)
    const [taskName,setTaskName] = useState('');
    const [taskDetail,setTaskDetail] = useState('');
    const [taskDeadline,setTaskDeadline] = useState('');
    const [options, setOptions] = useState([]);
    const [selectedGroupOption, setSelectedGroupOption] = useState();
    const [optionsMem, setOptionsMem] = useState([]);
    const [selectedMemberOption, setSelectedMemberOption] = useState();
    const navigate = useNavigate();
    
    function loadMember(){
        setTimeout(()=>{
           
        },5000)
        
    }
    useEffect(()=>{
        Axios.post("http://localhost:3050/api/group/mygroups",{
            user_id:user_id
        }).then((response)=>{
            
            console.log(response.data)
            setOptions(response.data)
        })
    },[])

    function handleChange(event){
        setSelectedGroupOption(event.target.value);
        loadMember();
        
    }
    useEffect(()=>{
        Axios.post("http://localhost:3050/api/group/members",{
            grp_id:selectedGroupOption
            }).then((response)=>{
                
                console.log(response.data)
                setOptionsMem(response.data)
            })
            console.log(selectedGroupOption)
    },[selectedGroupOption])

    function handleChangeMem(event) {
        setSelectedMemberOption(event.target.value);
    }

    function taskSubmit(){
        Axios.post("http://localhost:3050/api/group/assigntask",{
            grp_id:selectedGroupOption,
            task_name:taskName,
            task_details:taskDetail,
            assigned_by:user_id,
            assigned_to:selectedMemberOption,
            deadline:taskDeadline
        }).then((response)=>{        
            if(response.data == 'task created'){
                navigate(-1);
            }
        })
    }

    return(
        <div className='createtask-body'>

            <div className='createtask-box'>
                <div className='createtask-header'>
                    Create Task
                </div>
                <div className='createtask-options'>
                    <div className='createtask-flex-col'>
                        <div className='createtask-text'>GROUP</div>
                        <select value={selectedGroupOption} onChange={handleChange} className="createtask-select">
                            <option value=""  className='createtask-option' selected hidden> SELECT AN GROUP </option>
                            {options.map(option => (
                                <option key={option.grp_id} id={option.grp_id} value={option.grp_id}  className='createtask-option'>{option.grp_name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='createtask-flex-col'>
                        <div className='createtask-text'>Member</div>
                        <div>
                            <select value={selectedMemberOption} onChange={handleChangeMem} className="createtask-select">
                                <option value="" className='createtask-option'> SELECT AN OPTION </option>
                                {optionsMem.map(optionm => (
                                    <option key={optionm.grp_id} value={optionm.memeber_id}  className='createtask-option' >{optionm.username}</option>
                                ))}
                            </select>
                        </div>    
                    </div>                
                </div>
                <div className='createtask-options'>
                    <div className='createtask-flex-col'>
                        <div className='createtask-text'>Task Name</div>
                        <input className="createtask-select" onChange={(e) => {setTaskName(e.target.value)}} />
                            
                    </div>
                    <div className='createtask-flex-col'>
                        <div className='createtask-text'>Deadline</div>
                            <input type='date' className="createtask-select"  onChange={(e) => {setTaskDeadline(e.target.value)}} />
    
                        </div>                
                </div>
                <div>
                    <div className='flex-column-about'>
                        <div className='createtask-text'>Description</div>
                        <textarea name="Text1" cols="40" rows="5" className='createtask-content-about' onChange={(e)=>{setTaskDetail(e.target.value)}}></textarea>
                    </div>
                </div>
                
                <div className='createtask-buttons'>
                        <button className='createtask-button-cancel createtask-button-text' onClick={()=> navigate(-1)} >CANCEL</button>
                        <button className='createtask-button-create createtask-button-text' onClick={() => taskSubmit()} >CREATE</button>
                </div>

            </div>
            
        </div>

    )
}

export default CreateTask;