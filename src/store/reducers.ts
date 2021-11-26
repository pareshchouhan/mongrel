
import { combineReducers } from 'redux';
import { produce } from 'immer';
const about = produce((state = {
    version: '0.0.1'
}, action: any) =>{
   return state;
});
const projectReducer = combineReducers({
    about
})

export const rootReducer = (state: any, action: any) => {
    return projectReducer(state, action)
}