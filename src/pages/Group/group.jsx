import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from 'axios';
import { motion } from "framer-motion";
import './group.css'
import { PieChart } from 'react-minimal-pie-chart';


import {AnimatePresence} from 'framer-motion';
import { json, useNavigate } from "react-router-dom";
const Group = ()=>{
    var link = "http://localhost:3050"
    const user_id = useSelector((state)=> state.auth.user_id.payload)
    const isLoggedIn = useSelector((state) =>state.auth.isLoggedIn)
    const [data,Setdata] = useState([]);
    const [joinedData,SetjoinedData] = useState([])
    const [selectedId, setSelectedId] = useState(null);
    const navigate = useNavigate();
    const [toDo,SettoDo] = useState([]);
    const [doing,Setdoing] = useState([]);
    const [done,Setdone] = useState([]);
    const [members,Setmembers] = useState([]);
    const [taskDetails,SettaskDetails] = useState([]);

    useEffect(()=>{
        Axios.post(link+"/api/group/mygroups",{
            user_id:user_id
        }).then((response)=>{
                
         /*   console.log(response.data)*/
           Setdata(response.data)
        })

        Axios.post("http://localhost:3050/api/group/joinedgroups",{
            user_id:user_id
        }).then((response)=>{
            
            /*console.log(response.data)*/
           SetjoinedData(response.data)
        })
    },[user_id])
    
    /*useEffect(()=>{
        Axios.post("http://localhost:3050/api/group/group/task",{
            grp_id:selectedId
        }).then((response)=>{
            
            console.log(response.data)
           SetjoinedData(response.data)
        })
    },[selectedId])*/

    function dum(r){
        var count = Object.keys(r).length;
        console.log(count)
        var temp_toDo=[]
        var temp_doing=[]
        var temp_done=[]
        for(let i = 0;i<count;i++){
            var t = r[i];
            console.log(t.state)
            if(t.state == 'ToDo'){
                temp_toDo.push(t)
            }else if(t.state == 'Doing'){
                temp_doing.push(t)
            }else if(t.state == 'Done'){
                temp_done.push(t)
            }
        }
        SettoDo(temp_toDo)
        Setdoing(temp_doing)
        Setdone(temp_done)
    }

    function getGroupInfo(Group_id){
        setSelectedId(Group_id)
        
        Axios.post("http://localhost:3050/api/group/group/task",{
            grp_id:Group_id
        }).then((response)=>{
            console.log(response.data)
            SettaskDetails(response.data)
            var re = response.data
            dum(re);
        })

        Axios.post("http://localhost:3050/api/group/group/members",{
            grp_id:Group_id
        }).then((response)=>{
            Setmembers(response.data)
        })


    }
    /*
            <motion.h5>{data.find(item => item.grp_id === selectedId).grp_name}</motion.h5>
        <motion.h2>{data.find(item => item.grp_id === selectedId).grp_description}</motion.h2>S
    
    */
    
    return(
        <AnimatePresence>
        <div className="group-body">
            <div className="overlayCenter">
                    <motion.button className="group-close-btn" onClick={() => setSelectedId(null)}>Close</motion.button>
                    <AnimatePresence>
                        {selectedId && (
                        
                        <motion.div layoutId={selectedId} className="group-content-body">
                            <motion.div className="group-content-img group-content-layout">
                                
                            </motion.div>
                            <motion.div className="group-content-layout group-progress">
                                <motion.div className="group-ToDo">
                                    <motion.h2>ToDo</motion.h2>
                                    <hr/>
                                    <br />
                                    <motion.div>
                                    {toDo ==0 ? <h2>No task assigned</h2>:toDo.map(TD=>(
                                        <motion.div key={TD.task_id} layoutId={TD.task_id} className="group-progress-Box group-flex-col">
                                            
                                            <motion.div className="group-progress-Box-header "> {TD.task_name} </motion.div>
                                            <motion.div className="group-progress-Box-body"> {TD.task_details} </motion.div>
                                            <motion.div className="group-progress-Box-footer"> @{TD.username}</motion.div>
                                            <motion.div className="group-progress-Box-footer-deadline">Deadline: {Date(TD.deadline).toString()}</motion.div>
                                            
                                        </motion.div>
                                    ))}
                                    </motion.div>
                                    
                                    
                                    
                                </motion.div>
                                <motion.div className="group-Doing">
                                    <motion.h2>Doing</motion.h2>
                                    <hr/>
                                    <br/>
                                    {doing == 0 ? <h2>No Active task</h2> : doing.map(DO=>(
                                        <motion.div key={DO.task_id} layoutId={DO.task_id} className="group-progress-Box group-flex-col">
                                            <motion.div className="group-progress-Box-header "> {DO.task_name} </motion.div>
                                            <motion.div className="group-progress-Box-body"> {DO.task_details} </motion.div>
                                            <motion.div className="group-progress-Box-footer"> @{DO.username}</motion.div>
                                            <motion.div className="group-progress-Box-footer-deadline">Deadline: {Date(DO.deadline).toString()}</motion.div>
                                        </motion.div>
                                    ))}
                                    
                                </motion.div>
                                <motion.div className="group-Done ">
                                    <motion.h2>Done</motion.h2>
                                    <hr/>   
                                    <br />
                                    {done == 0 ? <h2>Non of the Task are Done</h2> : done.map(D=>(
                                        <motion.div key={D.task_id} layoutId={D.task_id} className="group-progress-Box group-flex-col">
                                            <motion.div className="group-progress-Box-header "> {D.task_name} </motion.div>
                                            <motion.div className="group-progress-Box-body">{D.task_details} </motion.div>
                                            <motion.div className="group-progress-Box-footer"> @{D.username} </motion.div>
                                            <motion.div className="group-progress-Box-footer-deadline">Deadline: {Date(D.deadline)}</motion.div>
                                        </motion.div>
                                    ))}
                                    
                                </motion.div>
                            </motion.div>
                            <motion.div className="group-content-layout-pie group-pie-Box group-flex-row">
                                {Object.keys(toDo).length == 0 && Object.keys(doing).length == 0 && Object.keys(done).length == 0 ? <h2>No data found</h2> 
                                :<motion.div>
                                <motion.div className="group-pie-task-details">
                                </motion.div>
                                <motion.div className="group-pie-chart-content">
                                    <motion.div className="group-pie-chart">
                                    <PieChart 
                                        data={[
                                            { title: 'ToDo', value: Object.keys(toDo).length, color: '#FF0000' },
                                            { title: 'Doing', value: Object.keys(doing).length, color: '#ffff00' },
                                            { title: 'Done', value: Object.keys(done).length, color: '#00ff00' },
                                        ]}
                                    />

                                    </motion.div>
                                </motion.div>
                                </motion.div>                   
                                        
                                }
                                                                         
                            </motion.div>

                            <motion.div className="group-content-layout group-members group-flex-row">
                                <motion.div>
                                    <motion.h2>Members</motion.h2>
                                </motion.div>
                                <motion.div className="group-flex-row group-members-content">
                                    
                                {Object.keys(members).length == 0 ? <h1>No Memebers Exist</h1> : members.map(M =>(
                                        <motion.div className="group-member-card">{M.username}</motion.div>
                                    
                                ))}
                                
                                </motion.div>
                            </motion.div>
                            
                        </motion.div>
                        )}
                    </AnimatePresence>
            </div>

            <div className="my-group-body">
                <div className="my-group-header">
                    <h2>My Groups</h2>
                    <div className="my-group-actions">
                        <h2>Total Group:</h2>
                        <button className="group-buttons" onClick={()=>{navigate("/creategroup")}}>CREATE</button>
                        <button className="group-buttons" onClick={()=>{navigate("/joingroup")}}>JOIN</button>
                    </div>
                </div>
                <div className="created-group-body-content">
                
                    {data.map(item => (
                            <motion.div key={item.grp_id} layoutId={item.grp_id} onClick={() => getGroupInfo(item.grp_id) } className="group-box">
                            <motion.h2>{item.grp_name}</motion.h2>
                            <motion.h5>{item.grp_description}</motion.h5>
                            <motion.h5>{item.grp_code}</motion.h5>

                            </motion.div>
                    ))}                 
            </div>
            
            
            </div>

            <div className="joined-group-body">
                <div className="my-group-header">
                    <h2>Joined Groups</h2>  
                    <hr />
                </div>
                <div className="created-group-body-content">
                
                    {joinedData.map(item => (
                            <motion.div  className="group-box">
                                <motion.h5>{item.admin_id}</motion.h5>
                                <motion.h2>{item.grp_name}</motion.h2>
                                <motion.h5>{item.grp_description}</motion.h5>
                            </motion.div>
                    ))}                 
                </div>
                
            </div>
        </div>
        </AnimatePresence>
    )
}

export default Group;