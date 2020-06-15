
import { combineReducers } from 'redux';
import { produce } from 'immer';
const about = produce((state = {
    version: '0.0.1'
}, action) =>{
   return state;
});
const projectReducer = combineReducers({
    about
})

export const rootReducer = (state, action) => {
    return projectReducer(state, action)
}