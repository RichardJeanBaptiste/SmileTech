/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useContext, useEffect, useState} from "react";
//import { DateContext } from "./DateContext";
import { my_schedule } from "../../../Dummies";
import olay from '../../assets/olya.jpg';

type RowProps = {
    time: string;
};

function Weekday() {

    const [schedule, SetSchedule] = useState([]);
    const [day, SetDay] = useState(0);

    useEffect(() => {
        //console.log(my_schedule());
        SetDay(new Date().getDay());
    },[]);

    const Cell = () => {
        return (
            <div className="cell">
                <div className="inner_cell">
                    <img src={olay} width={40} height={40} style={{borderRadius: '50%'}}/>
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
                <p className={day === 1 ? 'active' : ''}>Mon</p>
                <p className={day === 2 ? 'active' : ''}>Tue</p>
                <p className={day === 3 ? 'active' : ''}>Wed</p>
                <p className={day === 4 ? 'active' : ''}>Thu</p>
                <p className={day === 5 ? 'active' : ''}>Fri</p>
                <Row time="7:00"/>
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