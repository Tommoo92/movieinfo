import { createStore } from "redux";
import allReducers from "../reducers/colorReducer";

const store = createStore(allReducers, 
    {
    color: 'yellow'
    },
    window.devToolsExtension && window.devToolsExtension()
);

export default store;