import React, {useContext} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ScreenContainer from "./ScreenContainer";
import Aktien from "../components/Aktien/Aktien";
import Fade from "./Fade";


const Router: React.FC = () => {

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