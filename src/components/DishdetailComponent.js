import React from "react";

import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

function RenderDishCard(props){
  return (
<Card key={props.dish.id}>
            <CardImg top src={props.dish.image} alt={props.dish.name} />
            <CardBody>
              <CardTitle>{props.dish.name}</CardTitle>
              <CardText>{props.dish.description}</CardText>
            </CardBody>
          </Card>
  )
} 



 
  
 const go = (com) => {
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


const DishDetail=(props)=>{
    if(props.dish!==undefined){
    return (
      <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDishCard dish={props.dish}/>
        </div>
        <div className="col-12 col-md-5 m-1">
          <header>
            <h4>Comments</h4>
          </header>
          {go(props.dish.comments)}
        </div>
      </div>
      </div>
    );
    }else{
      return(<div></div>)
    }
  }

export default DishDetail;