import React, {Props} from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    text: {
        color: "white"
    }

}));

const Aktien: React.FC<Props<any>> = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.text}>
                Hello
            </div>
        </>
    );
}
export default Aktien;
