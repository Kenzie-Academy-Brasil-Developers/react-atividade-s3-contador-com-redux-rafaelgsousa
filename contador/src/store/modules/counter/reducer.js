import {ADD,SUB} from "./actionTypes.js"

const initialvalue = 0
const counterReducer = (state=initialvalue,action) => {
    switch(action.type){
        case ADD:
            return state + action.payload;
        case SUB:
            return state - action.payload;
        default:
            return state;
    }
}

export default counterReducer;