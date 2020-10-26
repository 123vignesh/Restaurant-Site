import React, { Component } from "react";

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  CardImgOverlay,
} from "reactstrap";

import { DISHES } from "../shared/dishes";

export default class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Card>
        <CardImg top src={this.props.src} alt={this.props.name} />
        <CardBody>
          <CardTitle>{this.props.name}</CardTitle>
          <CardText>{this.props.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}
