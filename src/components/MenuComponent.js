import React, { Component } from "react";

import {
  Card,
  CardTitle,
  CardImg,
  CardImgOverlay,
} from "reactstrap";

import DishDetail from "./DishdetailComponent";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
      comments: null,
    };
  }

  onDishSelect = (dish) => {
    this.setState({
      selectedDish: dish,
      comments: dish.comments,
    });
  };

  renderDish = (dish) => {
    if (dish !== null) {
      return (
        <DishDetail
          src={dish.image}
          name={dish.name}
          description={dish.description}
          comments={dish.comments}
          id={dish.id}
        />
      );
    } else {
      return <div></div>;
    }
  };
  
  

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <div className="container">
          <div className="row">{menu}</div>

              {this.renderDish(this.state.selectedDish)}
           
        </div>
      </div>
    );
  }
}
