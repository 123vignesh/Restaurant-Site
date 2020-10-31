import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

import { NavLink } from "react-router-dom";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      isValidate:{
        ValidateName:false,
        ValidatePassword:false
      },
    };
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: true,
    });
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };



  handleSubmit = (e) => {
    alert(
      "UserName:" +
        this.username.value +
        " " +
        "Password:" +
        this.password.value +
        " " +
        "Remember me:" +
        this.remember.checked
    );

    e.preventDefault();
    this.toggleModal();
  };

  render() {
 
    
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="/assets/images/logo.png"
                alt="Restaurant Logo"
                width="40px"
                height="41px"
              />
            </NavbarBrand>

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span>
                    Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span>
                    Menu
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span>
                    About Us
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span>
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button outline onClick={this.toggleModal}>
                <span className="fa fa-sign-in fa-lg"></span> Login
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="username">User Name</Label>
               
                  <Input type="text" id="username" name="username" 
                  innerRef={(input) => this.username = input}
                  onChange={(e)=>{
                    if(e.target.value.length<3){
                    this.setState({
                    isValidate:{ ...this.state.isValidate,["ValidateName"]:true}
                  })
                }else{
                  this.setState({
                    isValidate:{ ...this.state.isValidate,["ValidateName"]:false}
                  })
                }
                }}
                  />
                {this.state.isValidate.ValidateName?<p style={{color:"red"}}>Username should have more than 3 character</p>:""}
              </FormGroup>

              <FormGroup >
                <Label htmlFor="password">Password</Label>
               
                  <Input type="password" id="password" name="password" 
                  innerRef={(input) => this.password = input}
                  onChange={(e)=>{
                    if(e.target.value.length<3){
                    this.setState({
                    isValidate:{ ...this.state.isValidate,["ValidatePassword"]:true}
                  })
                }else{
                  this.setState({
                    isValidate:{ ...this.state.isValidate,["ValidatePassword"]:false}
                  })
                }
                }}
                  />
                
                {this.state.isValidate.ValidatePassword?<p style={{color:"red"}}>Password should have more than 3 character</p>:<p></p>}
              </FormGroup>

              <FormGroup check>
                <Label check>
                
                  <Input type="checkbox" name="remember" 
                  innerRef={(input) => this.remember = input}
                  />
                  Remember Me
                 
                </Label>
              </FormGroup>

              <FormGroup>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
