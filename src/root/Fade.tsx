import React, {useContext, useEffect, useState} from "react";
import {Context} from "../state/Store";


interface Props {
    direction: number;
}

const Fade: React.FC<Props> = ({direction, children}) => {

    const [displayChildren, setDisplayChildren] = useState(false);
    // @ts-ignore
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        console.log("Fade called")
        dispatch({type: "MOVE", payload: direction})
        dispatch({type: "FADE", payload: 0})
        setTimeout(() => runAfterTimeout(), 1500)

    }, [])
/*

1: alte Komponente ausfaden lassen
-> dispatch sofort starten
-> timer funktion für returnAfterTimeout so setzen,

2: neue Komponente einfaden lassen
-> dispatch sofort starten
-> display schwarz für 0.5s
-> dann fade zu transparent
hier move=1 für nach links

 */

    const runAfterTimeout = () => {
        setDisplayChildren(true)
        dispatch({type: "FADE", payload: 1})
    }
    return (
        <>
            {children}

        </>
    )
}

export default Fade;