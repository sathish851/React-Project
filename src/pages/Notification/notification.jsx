import { useEffect, useState } from "react";
import Axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import './notification.css'
const Notification = ()=>{
    const user_id = useSelector((state)=> state.auth.user_id.payload)
    const [notification,Setnotification] = useState([]);

    const [sendRequest, setSendRequest] = useState(true);

    useEffect(()=>{
        if(sendRequest){
            Axios.post("http://localhost:3050/api/group/notification",{
            user_id:user_id
        }).then((response)=>{
            Setnotification(response.data);
            setSendRequest(true)    
        })
        }
        
    },[sendRequest])

    function cancelNotification(ID){
        Axios.post("http://localhost:3050/api/group/notification/cancel",{
            notify_id:ID,
        }).then((response)=>{
            console.log(response.data)
            setSendRequest(true)
            window.location.reload(false);
        })
    }

    function acceptNotification(N_ID,G_ID,M_ID){
        Axios.post("http://localhost:3050/api/group/notification/accept",{
            notify_id:N_ID,
            grp_id:G_ID,
            member_id:M_ID,
        }).then((response)=>{
            console.log(response.data)
            setSendRequest(true)
            window.location.reload(false);
        })
    }
    return(
        <div className="notification-body">
            {notification.map(notify =>(
                
                <div key={notify.nofity_id} layoutId={notify.nofity_id}>
                    <h2> {notify.username} </h2>
                    <h4> request to join {notify.grp_name} </h4>
                    <button onClick={()=>cancelNotification(notify.nofity_id)}>cancel</button>
                    <button onClick={()=>acceptNotification(notify.nofity_id,notify.grp_id,notify.member_id)}>Accept</button>
                </div>
            ))}
        </div>
    );
}

export default Notification;