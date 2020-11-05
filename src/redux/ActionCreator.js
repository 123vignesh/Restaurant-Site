import { baseURL } from "../shared/baseUrl";
import * as ActionTypes from "./ActionTypes";


export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

    return fetch(baseURL + "dishes")
    .then(response =>response.json())
    .then(dishes => dispatch(addDishes(dishes)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

export const fetchPromos = () => (dispatch) => {
  dispatch(PromosLoading(true));

    return fetch(baseURL + "promotions")
    .then(response => response.json())
    .then(promotions => dispatch(addPromos(promotions)));
};

export const addPromos = (promotions) => ({
  type: ActionTypes.ADD_PROMOTIONS,
  payload: promotions,
});

export const PromosLoading = () => ({
  type: ActionTypes.PROMOTIONS_LOADING,
});

export const PromosFailed = (errmess) => ({
  type: ActionTypes.PROMOTIONS_FAILED,
  payload: errmess,
});

export const fetchComments = () => (dispatch) => {
  return fetch(baseURL + "comments")
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)));
};

export const CommentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});
