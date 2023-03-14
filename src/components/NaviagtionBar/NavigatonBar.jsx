import './NavigationBar.css'

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../Store/slice';
const NavigatinBar = ({children}) =>{

    const dispatch = useDispatch();
    const menuItem=[
        {
            path:"/user/profile",
            name:"Profile"
        },
        {
            path:"/user/group",
            name:"Group"
        },
        {
            path:"/user/tasks",
            name:"Tasks"
        },
        {
            path:"/user/Notification",
            name:"Notification"
        },
        {
            path:"/user/notes",
            name:"Notes"
        }
    ]
    return(
        <>
        <div className="header_bar">
            <div className='logo_navigationBar'>
            
            </div>
            
            <div className='links_box'>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} className="links" activeclassname="active">
                        <div className='menu_names'>{item.name}</div>
                    </NavLink>
                ))
            }    
            </div>
            

            <div className='logo_nav'>
                <div>
                    <button onClick={()=>dispatch(logout)}>logout</button>
                    <select>
                        <option selected hidden></option>
                        <option >Edit</option>
                        <option >Logout</option>
                    </select>
                </div>
                <div className='logo_nav_img'>

                </div>
            </div>
            
        </div>
        <main>{children}</main>
        </>
        
    )
}

export default NavigatinBar;