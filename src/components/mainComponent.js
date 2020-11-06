import React, { Component } from "react";
import { Switch, Redirect, Route ,withRouter} from "react-router-dom";
import {connect} from "react-redux"

import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Header from "../components/HeaderComponent";
import DishDetail from "../components/DishdetailComponent";
import Menu from "./MenuComponent";
import About from "./AboutComponent";

import Footer from "./FooterComponent";
import {PostComment ,fetchComments,fetchDishes,fetchPromos} from "../redux/ActionCreator"
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comment: state.comment,
    promotion: state.promotion,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  PostComment: (dishId, rating, author, comment) => dispatch(PostComment(dishId, rating, author, comment)),

  
  fetchDishes:()=>dispatch(fetchDishes()),
  fetchPromos:()=>dispatch(fetchPromos()),
  fetchComments:()=>dispatch(fetchComments()),

  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}

});




class Main extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
  }
   

  render() {

const    HomePage = () => {
      return (
        <Home
          dishes={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={
            this.props.promotion.promotions.filter((promotion) => promotion.featured)[0]
           }
           promotionLoading={this.props.promotion.isLoading}
           promotionErrMess={this.props.promotion.errMess}


          leaders={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
        
      );
    };




const DishDetailRender = ({ match }) => {
 
        return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishID, 10)
            )[0]
          }
          comment={this.props.comment.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishID, 10)
          )}
          PostComment={this.props.PostComment}
           commentErrMess={this.props.CommentsFailed}
          CommentAdd={this.props.addComments}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
        />
      );
    };

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch location={this.props.location}>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishID" component={DishDetailRender} />
          <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />

          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />

          <Redirect to="/home" />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
