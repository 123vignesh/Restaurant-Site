
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { COMMENTS } from "../shared/comments";


export const initialState={
    dishes: DISHES,
    leaders: LEADERS,
    promotion: PROMOTIONS,
    comment: COMMENTS,
}


export const Reducer = (state=initialState,action)=>{
             return state;
  }
