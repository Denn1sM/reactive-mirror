import React from "react";
import {fetchAvvdata} from "./SWARequest";
import Connections from "./components/swa/Connections";

const ScreenContainer: React.FC = () => {
    const alleVerbindungen = fetchAvvdata();
    console.log("hccellodd")
    return (
        <>sth
        <Connections />
        </>
    );
}
export default ScreenContainer