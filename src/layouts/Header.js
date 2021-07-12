import React, {useState} from "react";
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import Icon from "./utility/Icon";
import {Link} from "react-router-dom";
import DogsApi from '../assets/vectorpaint.svg'
import DogsApi2 from '../assets/vectorpaint2.svg'

const Header=(props)=>{
    const [navSelected,setNavSelected]=useState(props.navigate)

    const navigate=(path)=>{
        setNavSelected(path)
    }

    return(
        <>
           <div className="nav-vertical">
               <ul className="nav-ul">
                   <Link  to='/home' onClick={()=>navigate('Dashboard')}>
                       <li>
                           <Icon isSelected={navSelected} text="Dashboard"><AiFillHome/></Icon>
                       </li>
                   </Link>
                   {/* <Link to='/dogs' onClick={()=>navigate('Dogs')}>
                       <li>
                           <Icon isSelected={navSelected} text="Dogs">
                               {navSelected!=='Dogs'?<img style={{height:"30px"}} src={DogsApi}/>:<img style={{height:"30px"}} src={DogsApi2}/>}
                            </Icon>
                       </li>
                   </Link> */}
               </ul>

               <div>
                   <ul className="nav-ul-bottom">
                       <li>
                           <Icon isSelected={navSelected} text="Logout"><BiLogOut/></Icon>
                       </li>
                   </ul>
               </div>
           </div>



            <div className="pageHeader">
                <div className="container-fluid">
                    <div className="row" style={{padding:'10px'}}>
                        <div className="col-md-4">
                            <h2>Dashboard</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header;