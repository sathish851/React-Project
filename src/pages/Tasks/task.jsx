import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './task.css'
import Axios from 'axios'
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

const Task = ()=>{
    const navigate = useNavigate();
    const user_id = useSelector((state)=> state.auth.user_id.payload)
    const [assignedTasks,setAssignedTasks] = useState([]);
    const [myTasks,setMyTasks] = useState([]);
    const [dataUpdate,setDataUpdate] = useState(false);

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
            })
        }
    }

    return(
        <div className='task-body'>
            <div className='assigned-task-body'>
                <div className="assigned-task-header">
                    <h2>Assigned Tasks</h2>
                    <div className="assigned-task-actions">
                        <h2>Total Tasks:</h2>
                        <button className="group-buttons" onClick={()=>{navigate("/createtask")}}>CREATE</button>
                    </div>
                </div>
                <div>
                    {assignedTasks.map(item => (
                            <motion.div key={item.task_id} layoutId={item.task_id} >
                                <motion.h2>{item.task_name}</motion.h2>
                                <motion.h5>assigned_to: {item.username}</motion.h5>
                                <motion.h5>Group: {item.grp_name}</motion.h5>    
                            </motion.div>
                    ))}   
                </div>
            </div>

            <div className='my-task-body'>
                <div className='my-task-header'>
                    <h2>My Tasks</h2>
                </div>
                <div>
                    {myTasks.map(item => (
                            <motion.div key={item.task_id} layoutId={item.task_id} >
                                <motion.h2>{item.task_name}</motion.h2>
                                <motion.h5>assigned_by: {item.username}</motion.h5>
                                <motion.h5>Group: {item.grp_name}</motion.h5>
                                <motion.button onClick={()=>updateState(item.task_id,item.state)}>{item.state}</motion.button>
                            </motion.div>
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default Task;