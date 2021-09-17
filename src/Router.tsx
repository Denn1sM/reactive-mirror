import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import ScreenContainer from "./ScreenContainer";
import Aktien from "./components/Aktien/Aktien";


const Router: React.FC = () => {

 return (
         <div>
            <BrowserRouter>
                 <Route path="/" exact>
                    <ScreenContainer/>
                 </Route>

                 <Route path="/aktien">
                    <Aktien />
                 </Route>
            </BrowserRouter>
         </div>
 )
}

export default Router;