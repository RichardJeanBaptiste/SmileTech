import './feedback.css';
import { FaStar } from "react-icons/fa";


export const Feedback = () => {
    return (
        <div className='feedback_root'>
            <div>
                <FaStar/>
            </div>
            <p>4.7/5</p>
            <p>Patient Feedback</p>
        </div>
    )
}