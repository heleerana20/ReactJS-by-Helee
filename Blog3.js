import React, { Component } from "react";
import Home from "./Home";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
class Blog3 extends Component {
  render() {
    return (
  <h2>
  <NavLink to="/Blog3">Blog3</NavLink>
  <Route path="/Blog3" component={Blog3}/>
<p>This is article of Blog3</p>





      links</h2>



    );
  }
}

export default Blog3;
