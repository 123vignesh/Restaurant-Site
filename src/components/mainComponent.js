import React,{Component} from "react";
import {Switch,Redirect,Route} from "react-router-dom"

import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Header from "../components/HeaderComponent";
import Menu from "./MenuComponent";
import {DISHES} from "../shared/dishes";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";
import Footer from "./FooterComponent";

class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      leader:LEADERS,
      promotion:PROMOTIONS
    }
  }

  

  HomePage=()=>{
    return (
        <Home dishes={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotion.filter((promotion)=>promotion.featured)[0]}
        leader={this.state.leader.filter((leader)=>leader.featured)[0]}
        
        />
    )
}

  render(){



  return (
    <div>
      <Header/>
<Switch>

<Route path="/home" component={this.HomePage} />   
<Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} /> 
<Route exact path="/contactus" component={Contact} /> 
<Redirect to="/home"/>

</Switch>     
        <Footer/>
    </div>
  );
  }
}

export default Main;
