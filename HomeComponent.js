import React from "react";

import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { baseURL } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import { FadeTransform } from "react-animation-components";

function RenderCard(props) {
  if (props.isLoading) {
    return <Loading />;
  } else if (props.isErrMess !== null) {
    return <h4>{props.isErrMess}</h4>;
  } else {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card>
          <CardImg src={baseURL + props.item.image} alt={props.item.name} />
          <CardBody>
            <CardTitle>{props.item.name}</CardTitle>
            {props.item.designation ? (
              <CardSubtitle>{props.item.designation}</CardSubtitle>
            ) : null}
            <CardText>{props.item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  }
}

function Home(props) {
  return (
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
          <RenderCard
            item={props.dishes}
            isLoading={props.dishesLoading}
            isErrMess={props.dishesErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.promotion}
            isLoading={props.promotionLoading}
            isErrMess={props.promotionErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.leaders}
            isLoading={props.leaderLoading}
            isErrMess={props.leaderErrMess}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
