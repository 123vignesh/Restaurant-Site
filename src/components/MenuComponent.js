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
        />
      );
    } else {
      return <div></div>;
    }
  };
  DateFormat = (date) => {
    var k = date.split("T");
    let monthNames = [
      "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",
    ];
    var t = k[0].split("-")[1];
    var t1 = k[0].split("-")[0];
    var t2 = k[0].split("-")[2];
    if (t < 10) {
      var Mon = t[1];
      var fin = monthNames[Mon - 1];

      var g = fin + " " + t2 + "," + t1;
      return g;
    } else {
      var Mon1 = t;
      var fin1 = monthNames[Mon1 - 1];
      var y = fin1 + " " + t2 + "," + t1;
      return y;
    }
  };
  
  renderComments = (com) => {
    if (com !== null) {
      var result = com.map((co) => {
        return (
          <ul className="list-unstyled">
            <li>{co.comment}</li>
            <br />
            <li>
              --{co.author}, {this.DateFormat(co.date)}
            </li>
          </ul>
        );
      });
      return (
        <div className="col-12 col-md-5 m-1">
          <header>
            <h4>Comments</h4>
          </header>
          {result}
        </div>
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

          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.state.selectedDish)}
            </div>

            {this.renderComments(this.state.comments)}
          </div>
        </div>
      </div>
    );
  }
}
