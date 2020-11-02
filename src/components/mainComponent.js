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
import {addComment } from "../redux/ActionCreator"

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comment: state.comment,
    promotion: state.promotion,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});




class Main extends Component {
  constructor(props) {
    super(props);
    
  }

 

  render() {

const    HomePage = () => {
      return (
        <Home
          dishes={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={
            this.props.promotion.filter((promotion) => promotion.featured)[0]
          }
          leaders={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
        
      );
    };




const DishDetailRender = ({ match }) => {
 
        return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishID, 10)
            )[0]
          }
          comment={this.props.comment.filter(
            (comment) => comment.dishId === parseInt(match.params.dishID, 10)
          )}
          addComment={this.props.addComment}

        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishID" component={DishDetailRender} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
