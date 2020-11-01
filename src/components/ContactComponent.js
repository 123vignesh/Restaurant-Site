import React, { Component } from "react";
import { Col, Label, Breadcrumb, BreadcrumbItem, Button,Row } from "reactstrap";

import { LocalForm, Errors, Control, } from "react-redux-form";

import { Link } from "react-router-dom";

const required=(val)=>val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const ValidNum=(val)=>!isNaN(Number(val));
const ValidEmail=(val)=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (values) => {
    alert("Current State is: " + JSON.stringify(values));
    
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>

        <Row className="form-group">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>

          <div className="col-12 col-md-9">
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label md={2} htmlFor="firstname">
                  <strong>First Name</strong>
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstname"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(10)
                  }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 10 characters or less'
                  }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="lastname" md={2}>
                  <strong>Last Name</strong>
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastname"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    validators={{
                      required,minLength:minLength(3),maxLength:maxLength(10)
                    }}
                  />
                  <Errors
                      className="text-danger"
                      show="touched"
                      model=".lastname"
                      messages={{
                        required:"Required",
                        minLength:"Minimum number of characters should be more than 2 characters",
                        maxLength:"Maximum number of characters should be less than 10 characters"
                      }}                  
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  <strong> Email</strong>
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    validators={{
                      required,ValidEmail
                    }}
                  />
                  <Errors
                    className="text-danger"
                    show="touched"
                    model=".email"
                    messages={{
                      required:"Required",
                      ValidEmail:"Enter valid email"
                    }}

                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="telnum" md={2}>
                  <strong>Tel Num</strong>
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel No"
                    className="form-control"
                    validators={{
                      required,ValidNum
                    }}
                  />
                  <Errors
                    className="text-danger"
                    show="touched"
                    model=".telnum"
                    messages={{
                      required:"Required",
                      ValidNum:"Enter valid number"
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox model=".agree" className="form-check-input" name="agree" />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
            

                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model=".contactType"
                    className="form-control"
                    name="contactType"
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="message" md={2}>
                  <strong> Your Feedback</strong>
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".textarea"
                    id="message"
                    name="message"
                    rows="12"
                    className="form-control"
                  ></Control.textarea>
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </Row>
      </div>
    );
  }
}

export default Contact;
