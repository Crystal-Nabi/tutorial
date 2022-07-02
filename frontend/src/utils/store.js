import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers";

const initialState = {};
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
export const store = createStoreWithMiddleware(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// import { createStore } from "redux";
// import rootReducer from "../reducers/index";

// const store = createStore(rootReducer);

// export default store;
