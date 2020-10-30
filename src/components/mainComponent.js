import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Header from "../components/HeaderComponent";
import DishDetail from "../components/DishdetailComponent";
import Menu from "./MenuComponent";
import About from "./AboutComponent";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { COMMENTS } from "../shared/comments";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      promotion: PROMOTIONS,
      comment: COMMENTS,
    };
  }

  HomePage = () => {
    return (
      <Home
        dishes={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={
          this.state.promotion.filter((promotion) => promotion.featured)[0]
        }
        leaders={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
      
    );
  };

  render() {
    const DishDetailRender = ({ match }) => {
     
   
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishID, 10)
            )[0]
          }
          comment={this.state.comment.filter(
            (comment) => comment.dishId === parseInt(match.params.dishID, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={this.HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishID" component={DishDetailRender} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
