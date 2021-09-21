const Reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'MOVE':
            return {
                ...state,
                move: action.payload
            };
        case 'MOVE_TO_LEFT':
            return {
                ...state,
                posts: state.posts.concat(action.payload)
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