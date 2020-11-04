
import {createStore,combineReducers,applyMiddleware} from "redux"
import {Dishes} from "./Dishes";
import {Comments} from "./Comments";
import {Leaders} from "./Leaders";
import {Promotions} from "./Promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {

    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comment: Comments,
            promotion: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
    
}