import './schedule.css';

function Schedule() {
    return (
        <div className='sched_container'>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <p>My Schedule</p>
                <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgba(218, 215, 205, 0.2)'}}>
                    <p>Weekdays</p>
                    <p>Week</p>
                    <p>Month</p>
                </div>
            </div>
            
        </div>
    )
}

export default Schedule;
