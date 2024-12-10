import { FaTooth } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
import { RiSearch2Fill } from "react-icons/ri";
import { FaBell } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import avi from '../../assets/grace.jpg';
import './navbar.css';

function Navbar(){
    return (
        <div className="container">
            <p><span><FaTooth/></span> SmileTech</p>
            <div className="divider"></div>
            <p><span><PiSquaresFourFill /></span> Dashboard</p>
            <p>Patients</p>
            <p>Schedule</p>
            <p>Analytics</p>
            <p>Reviews</p>
            <p>Settings</p>
            <div className="endnav">
                <div>
                    <div>
                        <RiSearch2Fill/>
                    </div>
                </div>

                <div>
                    <div>
                        <FaBell/>
                    </div>
                </div>
                
                <div>
                    <img src={avi} width="30px" height="30px"/>
                    <FaCaretDown />
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;