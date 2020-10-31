import {initialState,Reducer} from "./redux";
import {createStore} from "redux"


export const ConfigureStore = () => {
    const store = createStore(
        Reducer, 
        initialState, 
    );

    return store;
}