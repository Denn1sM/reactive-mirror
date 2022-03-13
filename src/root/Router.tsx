import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScreenContainer from './ScreenContainer';
import Aktien from "../components/Aktien/Aktien";
import NotesComponent from "../components/notes/NotesComponent";
// import NotesComponent from "../components/notes/NotesComponent";

const Router: React.FC = () =>
/*
                    <Route path="/note" exact>
                            <NotesComponent/>
                    </Route>
    */
  (
    <div>
      <BrowserRouter>
          <Route path="/" exact>
            <ScreenContainer />
          </Route>
          <Route path="/note" exact>
              <NotesComponent/>
          </Route>
          <Route path="/aktien">
              <Aktien percentageScala={false} />
          </Route>
      </BrowserRouter>
    </div>
  );

export default Router;
