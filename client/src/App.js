import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import { Errorpage } from './components/Errorpage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


const App = () => {
  return (
    <div>
      {/* <h1>

      hello from fronted
      </h1> */}

      <Navbar />


      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}



      {/* <div>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/contact">contact</NavLink>
         <NavLink to="/login">Login</NavLink>
         <NavLink to="/about">about</NavLink>
         <NavLink to="/registration">signup</NavLink>

     </div> */}




      <Switch>
        <Route exact path="/" >

          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/registration">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route >
          <Errorpage />
        </Route>

      </Switch>
      {/* <Route exact path="/" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} /> */}
    </div>
  )
}

export default App
