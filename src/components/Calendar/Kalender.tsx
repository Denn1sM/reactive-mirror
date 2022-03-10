import React from "react";
import './react-calendar/dist/Calendar.css';
import Calendar from "./react-calendar/src";


const Kalender: React.FC = () => {

    return (
        <div>
            <Calendar className='react-calendar'/>
        </div>
    );
}
export default Kalender