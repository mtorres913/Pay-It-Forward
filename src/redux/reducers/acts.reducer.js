


const acts = (state = [], action) => {
    switch (action.type){
        case 'SET_ACTS':
        return action.payload;
        default:
            return state;
    }
}

export default acts;