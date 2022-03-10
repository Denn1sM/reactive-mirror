import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ScreenContainer from "./ScreenContainer";
import Aktien from "../components/Aktien/Aktien";
import Fade from "./Fade";
//import NotesComponent from "../components/notes/NotesComponent";


const Router: React.FC = () => {
    /*
                    <Route path="/note" exact>
                            <NotesComponent/>
                    </Route>
    */
    return (
         <div>
            <BrowserRouter>
                 <Route path="/" exact>
                     <Fade direction={1}>
                         <ScreenContainer/>
                     </Fade>
                 </Route>

                 <Route path="/aktien">
                     <Fade direction={0}>
                         <Aktien percentageScala={false} />
                     </Fade>
                 </Route>
            </BrowserRouter>
         </div>
 )
}

export default Router;