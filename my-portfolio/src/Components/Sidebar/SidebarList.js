import React from "react";
import "./SidebarList.css";
import profilepic from "../../Image/meet-avtar.png";
import { FcNightPortrait,
    FcHome,
    FcTodoList,
    FcContacts,
    FcFactory,
    FcSalesPerformance, } from "react-icons/fc";
import { MdBiotech } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import {Link} from "react-scroll";

const SidebarList=({expandSidebar})=>{
    return( 
    <React.Fragment>

{expandSidebar ? (   <div className="navbar-items">
                        <div className="sidebar-profile-pic">
                            <img src={profilepic} alt="profilepic"/>     
                        </div>
                        <ul>
                            <Link to="home" spy={true} smooth={true} duration={100} offset={-100}>
                            <li className="nav-item"> <FcHome size={25} />Home</li>
                            </Link>
                            <Link to="about" spy={true} smooth={true} duration={100} offset={-100}>
                            <li className="nav-item"> <FcNightPortrait size={25} />About</li>    
                            </Link>
                                            
                            {/* <li className="nav-item"> <FcFactory size={20} />Work Experiance</li> */}
                            <Link to="tech_stack" spy={true} smooth={true} duration={100} offset={-100}>
                            <li className="nav-item"> <MdBiotech size={25} color="orange" />Tech Stack</li>
                            </Link>
                            {/* <li className="nav-item"> <MdCastForEducation size={25} />Education</li> */}
                            <Link to="project" spy={true} smooth={true} duration={300} offset={-50} activeClass="active">
                            <li className="nav-item"> <FcTodoList size={25} />Project</li>
                            </Link>
                            {/* <li className="nav-item"> <FcSalesPerformance size={25} />Testimonial</li> */}
                            {/* <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>
                            <li className="nav-item"> <FcContacts size={25} />Contact</li>        
                            </Link>                 */}
                        </ul>
                    </div>
                  ) : (
            <div>
                    <div className="navbar-items-only-icons">
                        <ul>
                            <li className="nav-item"> <FcHome size={25} /></li>
                            <li className="nav-item"> <FcNightPortrait size={25} /></li>                    
                            {/* <li className="nav-item"> <FcFactory size={25} /></li> */}
                            <li className="nav-item"> <MdBiotech size={25} color="orange" /></li>
                            {/* <li className="nav-item"> <MdCastForEducation size={25} color="orange"  /></li> */}
                            <li className="nav-item"> <FcTodoList size={25} /></li>
                            {/* <li className="nav-item"> <FcSalesPerformance size={25} /></li>
                            <li className="nav-item"> <FcContacts size={25} /></li>                         */}
                        </ul>
                    </div>
            </div>
)}
    </React.Fragment>
)
}

export default SidebarList