import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './task.css'
import Axios from 'axios'
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task = ()=>{
    const navigate = useNavigate();
    const user_id = useSelector((state)=> state.auth.user_id.payload)
    const [assignedTasks,setAssignedTasks] = useState([]);
    const [myTasks,setMyTasks] = useState([]);
    const [dataUpdate,setDataUpdate] = useState(false);
    const notify = () => toast("Wow so easy!");
    useEffect(()=>{
        Axios.post("http://localhost:3050/api/group/getassignedtask",{
            user_id:user_id
        }).then((response)=>{
            console.log(response.data)
            setAssignedTasks(response.data)
        })
    },[dataUpdate])

    useEffect(()=>{
        Axios.post("http://localhost:3050/api/group/getmytask",{
            user_id:user_id
        }).then((response)=>{
            console.log(response.data)
            setMyTasks(response.data)
            setDataUpdate(false)
        }) 
    },[dataUpdate])
    
    function updateState(task_id,state){    
        if(state == "ToDo"){
            Axios.post("http://localhost:3050/api/group/getmytask/ToDo",{
                task_id:task_id
            }).then((response)=>{
                console.log(response.data)
                setDataUpdate(true)
                toast(response.data)
            })
        }
        
        if(state == "Doing"){
            Axios.post("http://localhost:3050/api/group/getmytask/Doing",{
                task_id:task_id
            }).then((response)=>{
                console.log(response.data)
                setDataUpdate(true)
                toast(response.data)
            })
        }
        if(state == "Escalated"){
            Axios.post("http://localhost:3050/api/group/getmytask/Done",{
                task_id:task_id
            }).then((response)=>{
                console.log(response.data)
                setDataUpdate(true)
                toast(response.data)
            })
        }
    }

    function stateNotifier(p){
        if(p == "ToDo"){
            return"start"
        }else if(p == "Doing"){
            return "Escalate"
        }else if(p == "Escalated"){
            return "Wait for Approve"
        }else{
            
        }
    }

    
    return(
        <AnimatePresence>

        <motion.div className='task-body'>
            
            <motion.div className='assigned-task-body'>
                <motion.div className="assigned-task-header">
                    <h2>Assigned Tasks</h2>
                    <motion.div className="assigned-task-actions">
                        <h2>Total Tasks:</h2>
                        <button className="group-buttons" onClick={()=>{navigate("/createtask")}}>CREATE</button>
                    </motion.div>
                </motion.div>
                <motion.div className='assigned-task-body-content'>
                    {assignedTasks.map(item => (
                            <motion.div key={item.task_id} layoutId={item.task_id} className='task-box  task-details-text' >
                                <motion.h2>{item.task_name}</motion.h2>
                                <motion.h5>assigned_to: {item.username}</motion.h5>
                                <motion.h5>Group: {item.grp_name}</motion.h5>
                                {(item.state == "Escalated" ?<motion.button onClick={()=>updateState(item.task_id,item.state)}>Approve</motion.button>:<></>)}
                                <motion.button onClick={notify}>Notify!</motion.button>
                            </motion.div>
                    ))}   
                </motion.div>
            </motion.div>

            <motion.div className='my-task-body'>
                <motion.div className='my-task-header'>
                    <h2>My Tasks</h2>
                </motion.div>
                <motion.div className='my-task-body-content'>
                    {myTasks.map(item => (
                            <motion.div key={item.task_id} layoutId={item.task_id} className='task-box  task-details-text'>
                                <motion.div className='task-box-title'>{item.task_name}</motion.div>
                                <motion.div  className='task-details-text'>{item.task_details}</motion.div>
                                <motion.div className='task-flex-row'>
                                    <motion.div className='task-details'>            
                                            <motion.h5 className='task-details-text'>assigned_by: {item.username}</motion.h5>
                                            <motion.h5>Group: {item.grp_name}</motion.h5>
                                        </motion.div>
                                    <motion.div  className='task-details'>            
                                            {(item.state == "Escalated" ? <p>Waiting for Approve</p> :<motion.button onClick={()=>updateState(item.task_id,item.state)}>{stateNotifier(item.state)}</motion.button> )}
                                            {(item.state == "Done"?<motion.h5> State: Done</motion.h5>:<></>)}
                                        </motion.div>    
                                </motion.div>
                            </motion.div>
                    ))} 
                </motion.div>
            </motion.div>
        </motion.div>
        </AnimatePresence>
        
    )
}

export default Task;