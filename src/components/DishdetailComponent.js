import React, { Component } from "react";

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm, Errors, Control} from "react-redux-form";
import {Loading} from "./LoadingComponent"
import { baseURL } from "../shared/baseUrl";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDishCard(props) {
 
  console.log(props)
  if(props.isLoading){
    return(
      <div className="container">
                    <div className="row">            
                        <Loading/>
                    </div>
                </div>
    )
  }else if(props.errMess!==null && props.errMess!==undefined){
    return(
      <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
    )
  }else{
    
  return (
    <FadeTransform
    in
    transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
    }}>
    
    <Card key={props.dish.id}>
      <CardImg top src={baseURL+ props.dish.image} alt={props.dish.name} />
      <CardBody>
        <CardTitle>{props.dish.name}</CardTitle>
        <CardText>{props.dish.description}</CardText>
      </CardBody>
    </Card>
    </FadeTransform>
  );
  }
}

const required=(val)=>val && val.length;
const minLength=(len)=>(val)=>val && (val.length >= len);
const maxLength=(len)=>(val)=> !(val) || (val.length <= len);

class RenderComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  handleSubmit = (values) => {
    
    this.props.PostComment(this.props.dishId, values.rating, values.author, values.comment);
    this.toggleModal();
  };
  render() {
    
    if (this.props.com !== null) {
   
      var result = this.props.com.map((co) => {
        if(co.date!==undefined){
        return (
          <Stagger in>
          <ul className="list-unstyled">
            <li>{co.comment}</li>
            <br />
            <Fade in>
            <li>
              -- {co.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(co.date)))}
            </li>
            </Fade>
          </ul>
             </Stagger>
        );
            }
      });
      return (
        <div>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader>
              <h5 className="modal-title" style={{ display: "inline" }}>
                {" "}
                Submit Comment
              </h5>

              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                style={{ marginLeft: "260px" }}
                onClick={this.toggleModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="rating" md={4}>
                    <strong>Rating</strong>{" "}
                  </Label>
                  <Col md={12}>
                    <Control.select
                      model=".rating"
                      name="rating"
                      className="form-control"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>

                <Row className="form-group">
                  <Label htmlFor="author" md={4}>
                    <strong>Your Name</strong>{" "}
                  </Label>
                  <Col md={12}>
                    <Control.text
                      model=".author"
                      name="author"
                      placeholder="Your Name"
                      className="form-control"
                      validators={{
                        required,minLength:minLength(3),maxLength:maxLength(15)
                      }}
                    />
                    <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required:"Required",
                      minLength:"Must be greater than 2 character",
                      maxLength:"Must be 15 characters or less"
                    }}
                    />
                  </Col>

                </Row>

                <Row className="form-group">
                  <Label htmlFor="comment" md={4}>
                    <strong>Comment</strong>{" "}
                  </Label>
                  <Col md={12}>
                    <Control.textarea
                      model=".comment"
                      id="comment"
                      name="comment"
                      placeholder="Comment"
                      rows="6"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button type="submit" color="primary">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </LocalForm>
            </ModalBody>
          </Modal>

          {result}
          <Row>
            <Col>
              <Button outline onClick={this.toggleModal}>
                <span className="fa fa-pencil fa-lg"></span> Submit Comment
              </Button>
            </Col>
          </Row>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

function DishDetail(props) {
  console.log(props);
  if (props.dish !== undefined) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDishCard dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <header>
              <h4>Comments</h4>
            </header>

            <RenderComment com={props.comment} 
             PostComment={props.PostComment}
             dishId={props.dish.id}
            />

         

          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default DishDetail;
