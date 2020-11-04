import React from "react";
import {Link} from "react-router-dom";

import {
  Card,
  CardTitle,
  CardImg,
  CardImgOverlay,
  Breadcrumb,BreadcrumbItem
} from "reactstrap";
import {Loading} from "./LoadingComponent";

 function RenderMenuItem ({dish,isLoading,errMess}){
   if(isLoading){
     return(
      <div className="container">
      <div className="row">            
          <Loading/>
      </div>
  </div>
     )
   }else if(errMess){
    <div className="container">
    <div className="row">            
        <h4>{errMess}</h4>
    </div>
</div>
   }else{

   
 return (
   <Link to={`/menu/${dish.id}`}>
  <Card key={dish.id}>
  <CardImg width="100%" src={dish.image} alt={dish.name} />
  <CardImgOverlay>
    <CardTitle>{dish.name}</CardTitle>
  </CardImgOverlay>
</Card>
</Link>
 )
 }
}
  
const Menu=(props)=>{
    const menu = props.dishes.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish} isLoading={props.dishes.isLoading} errMess={props.dishes.errMess} />
        </div>
      );
    });
    return (
      <div>
        <div className="container">
        <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
          <div className="row">{menu}</div>
          </div>
      </div>
    );
    }

export default Menu;