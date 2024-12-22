import { useState } from 'react';
import './schedule.css';
import Weekday from './Weekday';
import Week from './Week';
import Month from './Month';

function Schedule() {

    const [view, setView] = useState(0);

    const changeView = (x : number) => {
        setView(x);
    }

    const showView = () => {
        if(view == 0){
            return (
                <Weekday/>
            )
        } else if(view == 1){
            return (
                <Week/>
            )
        } else {
            return (
                <Month/>
            )
        }
    }

    return (
        <div className='sched_container'>
            <div className='sched_header'>
                <p>My Schedule</p>
                <div className='date_filter'>
                    <p onClick={() => changeView(0)}>Weekdays</p>
                    <p onClick={() => changeView(1)}>Week</p>
                    <p onClick={() => changeView(2)}>Month</p>
                </div>
            </div>
            
            {showView()}
        </div>
    )
}

export default Schedule;
