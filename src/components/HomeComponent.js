import React from 'react';

import {Card,CardBody,CardImg,CardTitle,CardText,CardSubtitle,Breadcrumb,BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

function RenderCard({item}){
return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
)
}



function Home(props) {
    return(
      <div className="container">
         <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                        
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
        
       <div className="row row-header">
         <div className="col-12 col-md m-1">
            <RenderCard item={props.dishes}/>
         </div>
         <div className="col-12 col-md m-1">
         <RenderCard item={props.promotion}/>
         </div>
         <div className="col-12 col-md m-1">
         <RenderCard item={props.leaders}/>
         </div>
       </div>
      </div>
    );
}

export default Home; 