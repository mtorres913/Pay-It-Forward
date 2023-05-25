import { accordionActionsClasses } from "@mui/material";
import { combineReducers } from "redux";

const act = (state = '', action) => {
    if (action.type === 'SET_ACT'){
        return action.payload;
    }
    return state;
}

const acts = (state = [], action) => {
    switch (action.type){
        case 'SET_ACTS':
        return action.payload;
        default:
            return state;
    }
}

export default combineReducers ({
    act,
    acts
})