import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Projects from "./routes/projects";
import Articles from "./routes/articles"
import { DbContextProvider } from './context/DbContext';
import AdminAddProject from "./routes/adminAddProject";
import Article from './routes/article'


const App = () => {
  return (
    <DbContextProvider>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />;
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/admin/addProject" component={AdminAddProject} />;
            <Route exact path="/articles/:article_id" component={Article} />;
          </Switch>
        </Router>
      </div>
    </DbContextProvider>
  )
};

export default App;