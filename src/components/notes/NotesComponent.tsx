import {VFC} from "react";
import { FabricCanvasContainer } from "./containers";
import {Canvas, Toolbar} from "./index";


const NotesComponent: VFC = () => (
    <FabricCanvasContainer.Provider>
        <Canvas />
        <Toolbar />
    </FabricCanvasContainer.Provider>
);

export default NotesComponent;
