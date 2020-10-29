import React,{Component} from "react";
import {Switch,Redirect,Route} from "react-router-dom"

import Home from "./HomeComponent";
import Header from "../components/HeaderComponent";
import Menu from "./MenuComponent";
import {DISHES} from "../shared/dishes";
import Footer from "./FooterComponent";

class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      
    }
  }

  

  HomePage=()=>{
    return (
        <Home/>
    )
}

  render(){



  return (
    <div>
      <Header/>
<Switch>

<Route path="/home" component={this.HomePage} />   
<Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} /> 
<Redirect to="/home"/>

</Switch>     
        <Footer/>
    </div>
  );
  }
}

export default Main;
