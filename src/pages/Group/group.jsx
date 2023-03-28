import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from 'axios';
import { motion } from "framer-motion";
import './group.css'

import {AnimatePresence} from 'framer-motion';
import { useNavigate } from "react-router-dom";
const Group = ()=>{
    var link = "http://localhost:3050"
    const user_id = useSelector((state)=> state.auth.user_id.payload)
    const isLoggedIn = useSelector((state) =>state.auth.isLoggedIn)
    const [data,Setdata] = useState([]);
    const [joinedData,SetjoinedData] = useState([])
    const [selectedId, setSelectedId] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        Axios.post(link+"/api/group/mygroups",{
            user_id:user_id
        }).then((response)=>{
            
            console.log(response.data)
           Setdata(response.data)
        })

        Axios.post("http://localhost:3050/api/group/joinedgroups",{
            user_id:user_id
        }).then((response)=>{
            
            console.log(response.data)
           SetjoinedData(response.data)
        })
    },[user_id])

    
    return(
        <AnimatePresence>
        <div className="group-body">
            <div className="overlayCenter">
                    <AnimatePresence>
                        {selectedId && (
                        <motion.div key={selectedId} layoutId={selectedId}>
                            <motion.h5>{data.find(item => item.grp_id === selectedId).grp_name}</motion.h5>
                            <motion.h2>{data.find(item => item.grp_id === selectedId).grp_description}</motion.h2>
                            <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
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
                <div className="grid-container">
                
                    {data.map(item => (
                            <motion.div key={item.grp_id} layoutId={item.grp_id} onClick={() => setSelectedId(item.grp_id)}>
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
                <div className="grid-container">
                
                    {joinedData.map(item => (
                            <motion.div key={item.grp_id} layoutId={item.grp_id} >
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