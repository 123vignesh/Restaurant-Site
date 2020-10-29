import React, { Component } from "react";

import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

export default class DishDetail extends Component {
  constructor(props){
    super(props);
 
    console.log(this.props.dish);
  }
go = (com) => {
    if (com !== null) {
      var result = com.map((co) => {
        return (
          <ul className="list-unstyled">
            <li>{co.comment}</li>
            <br />
            <li>
              -- {co.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(co.date)))}
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
    if(this.props.dish!==undefined){
    return (
      <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card key={this.props.dish.id}>
            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <header>
            <h4>Comments</h4>
          </header>
          {this.go(this.props.dish.comments)}
        </div>
      </div>
      </div>
    );
    }else{
      return(<div></div>)
    }
  }
}
