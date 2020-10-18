import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
// import Contact from "./routes/contact";

const App = () => {
  return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />;
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/restaurants/:id/update" component={Update} />; */}
          </Switch>
        </Router>
      </div>
  )
};

export default App;