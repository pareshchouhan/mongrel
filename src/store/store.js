import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "./reducers";
const initialState = {
}

const composeEnhancers = composeWithDevTools({
    actionsBlacklist : []
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default store
