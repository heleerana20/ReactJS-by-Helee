import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Contact from "./Contact";
import Header from "./Header";
import Blog1 from "./Blog1.jpg";
import Blog2 from "./Blog2.jpeg";
import Blog3 from "./Blog3.jpg";





import Footer from "./Footer";


class Main extends Component {
  render() {
    return (


      <HashRouter>

        <header> Welcome to blogss</header>
        <article>
        <NavLink to="/Blog1">Blog1</NavLink>
        <Route path="/Blog1" component={Blog1}/>

        <p> Date: 23rd January, 2018</p>
        <p> In this article, I have included a whole load of blog examples from a wide variety of different niches.

Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting.
        inning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting.
        </p>

        <img src={Blog1} alt="Blog1"/>


        <NavLink to="/Blog2">Blog2</NavLink>
        <Route path="/Blog2" component={Blog2}/>
<p>Date: 1st April, 2015</p>
<p>Referring to the hospital doctors as "the stethoscope-dressed messengers from heaven," Amitabh Bachchan wrote: "The tunnel at the NSSH... Indeed several tunnels and some more probing with the meter in hand that sonographs... A few on the side injectables... At various locations on this mine field of a body... Some venous strips punctured and the fluids dripped in... A few hardcore instructions to follow... And back to the grind, despite</p>

    <img src={Blog2} alt="Blog2"/>






<NavLink to="/Blog3">Blog3</NavLink>
<Route path="/Blog3" component={Blog3}/>

<p>Date: 25th March, 2012</p>
<p>Having the lowest population density of any country on Earth has always made Mongolia extremely appealing to Magdalena and me; this is the reason why when living in Newcastle we often chose to go hiking in the invariably empty Cheviots, the UK’s least visited national Park, as opposed to the much lovelier but also much busier Lake District. Every Mongolian square kilometre averages just 1.9 people, compare that to 274 people per km2 in the UK, 334 per km2 in Japan, which I now call home, and a thoroughly cosy 18,960 per km2 in list-topping Monaco.</p>

<img src={Blog3} alt="Blog3"/>
</article>


        <div classname="mains">

        <main>
        <ul className="mains">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/nav">Nav</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
  <li><NavLink to="/header">Header</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/nav" component={Nav}/>
            <Route path="/contact" component={Contact}/>
           <Route path="/Header" component={Header}/>

          </div>
          </main>
        </div>
        <footer> Copyrights Reserved</footer>
      </HashRouter>

    );
  }
}

export default Main;
