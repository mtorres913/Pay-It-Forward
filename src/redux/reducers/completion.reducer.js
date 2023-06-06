
const completion = (state = [], action) => {
    if (action.type === 'SET_COMPLETION') {
        return action.payload;
    }
    return state;
}

export default completion;