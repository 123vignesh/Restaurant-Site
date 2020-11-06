import { baseURL } from "../shared/baseUrl";
import * as ActionTypes from "./ActionTypes";

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const PostComment = (dishId, rating, author, comment) => (dispatch) => {
  var newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  };

  newComment.date = new Date().toISOString();
  console.log(newComment);
  return fetch(baseURL + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "PostComment " + response.status + " " + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => {
      dispatch(addComment(response));
    })
    .catch((error) => console.log(error));
};

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseURL + "dishes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;

          /* 
            the above code looks like
            var error=(message)=>{
               this.message='Error ' + response.status + ': ' + response.statusText,

            }
            
            */
        }
      },
      (error) => {
        var errMess = new Error(error.message);
        return errMess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailed(error.message)));
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((error) => dispatch(PromosFailed(error.message)));
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(CommentsFailed(error.message)));
};

export const CommentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchLeaders = () => (dispatch) => {
  dispatch(LeadersLoading(true));

  return fetch(baseURL + "leaders")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(AddLeaders(response)))
    .catch((error) => alert(error.message));
};

export const AddLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders,
});

export const LeadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});

export const PostFeedBack = (
  firstname,
  lastname,
  email,
  telnum,
  contactType,
  message
) => (dispatch) => {
  var newFeedBack = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    telnum: telnum,
    contactType: contactType,
    message: message,
  };

  return fetch(baseURL + "feedback", {
    method: "POST",
    body: JSON.stringify(newFeedBack),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "PostFeedBack " + response.status + " " + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => {
      dispatch(addFeedBack(response));
    })
    .catch((error) => console.log(error));
};

//if u want to add feedback and display it
export const addFeedBack = (feedback) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: feedback,
});
