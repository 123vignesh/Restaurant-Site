import React, { Component } from "react";

import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

export default class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  DateFormat = (date) => {
    var k = date.split("T");
    let monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
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
  go = (com) => {
    if (com !== null) {
      var result = com.map((co) => {
        return (
          <ul className="list-unstyled">
            <li>{co.comment}</li>
            <br />
            <li>
              -- {co.author}, {this.DateFormat(co.date)}
            </li>
          </ul>
        );
      });
      return result;
    } else {
      <div></div>;
    }
  };
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card key={this.props.id}>
            <CardImg top src={this.props.src} alt={this.props.name} />
            <CardBody>
              <CardTitle>{this.props.name}</CardTitle>
              <CardText>{this.props.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <header>
            <h4>Comments</h4>
          </header>
          {this.go(this.props.comments)}
        </div>
      </div>
    );
  }
}
