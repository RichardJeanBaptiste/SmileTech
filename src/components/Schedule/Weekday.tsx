/**
 * create a 5 X 24 grid
 *    
 * 
 * 
 */

import { useContext, useEffect, useState} from "react";
//import { DateContext } from "./DateContext";
import { my_schedule } from "../../../Dummies";
import olay from '../../assets/olya.jpg';

type RowProps = {
    time: string;
};

function Weekday() {

    const [schedule, SetSchedule] = useState([]);
    useEffect(() => {
        console.log(my_schedule());
    },[]);

    const Cell = () => {
        return (
            <div className="cell">
                <div>
                    <img src={olay} width={50} height={50} />
                    <p>Test Event</p>
                </div>   
            </div>
        )
    }

    const Row: React.FC<RowProps> = ({ time }) => {
        return (
            <>
                <p>{time}</p>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
            </>
        );
    };

    //const {date, setDate} = useContext(DateContext);

    return (
        <div className="weekday_container">
                <p></p>
                <p className="item1">Mon</p>
                <p className="item1">Tue</p>
                <p className="item1">Wed</p>
                <p className="item1">Thu</p>
                <p className="item1">Fri</p>
                <Row time="8:00"/>
                <Row time="9:00"/>
                <Row time="10:00"/>
                <Row time="11:00"/>
                <Row time="12:00"/>
                <Row time="13:00"/>
                <Row time="14:00"/>
                <Row time="15:00"/>
                <Row time="16:00"/>
                <Row time="17:00"/>
                <Row time="18:00"/>
        </div>
    )
}

export default Weekday;