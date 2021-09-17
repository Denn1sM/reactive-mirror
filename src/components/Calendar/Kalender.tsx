import React from "react";
import './react-calendar/dist/Calendar.css';
import {makeStyles} from "@material-ui/core/styles";
import Calendar from "./react-calendar/src";

const useStyles = makeStyles((theme) => ({
    cal: {

    }


}));
//TODO letztes Mal: Komplette komponente in diesen ordner verschoben, style kann in Calendar.css geeändert werden, ausgewählter Tag heist irgendwas mit tile
const Kalender: React.FC = () => {

    return (
        <div>
            <Calendar className='react-calendar'/>
        </div>
    );
}
export default Kalender