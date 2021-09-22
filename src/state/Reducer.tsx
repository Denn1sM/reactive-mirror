const Reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'MOVE':
            return {
                ...state,
                move: action.payload
            };
        case 'FADE':
            return {
                ...state,
                fade: action.payload
            };

        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;