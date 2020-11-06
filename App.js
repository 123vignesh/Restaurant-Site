import React,{Component} from "react";

import './App.css';

import Main from "./components/mainComponent"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import {ConfigureStore} from "./redux/configureStore"
class App extends Component{
  
  render(){
    const store = ConfigureStore();
  return (
    <Provider store={store} >
    <BrowserRouter>
    <div>
     
      <Main/>
     
    </div>
    </BrowserRouter>
    </Provider>
  );
  }
}

export default App;
