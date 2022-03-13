/* import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'

const initialState = {
    move: 0,
    fade: 0,
    error: null
};

// @ts-ignore
const Storeold = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    // @ts-ignore
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Storeold;

 */
