

const act = (state = [], action) => {
    if (action.type === 'SET_ACT'){
        return action.payload;
    }
    return state;
}

export default act;