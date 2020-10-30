import React from "react";

import { Card, CardBody, CardText, CardTitle, CardImg ,Breadcrumb,BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

function RenderDishCard({dish}){
  console.log(dish);
  return (
<Card key={dish.id}>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
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


function DishDetail(props){
  console.log(props);
    if(props.dish!==undefined){
    return (
      <div className="container">
        <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDishCard dish={props.dish}/>
        </div>
        <div className="col-12 col-md-5 m-1">
          <header>
            <h4>Comments</h4>
          </header>
          {go(props.comment)}
        </div>
      </div>
      </div>
    );
    }else{
      return(<div></div>)
    }
  }

export default DishDetail;