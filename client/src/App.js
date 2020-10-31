import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Projects from "./routes/projects";
import Articles from "./routes/articles"
import { ProjectsContextProvider } from './context/ProjectsContext';
import AdminAddProject from "./routes/adminAddProject";


const App = () => {
  return (
    <ProjectsContextProvider>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />;
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/admin/addProject" component={AdminAddProject} />;
          </Switch>
        </Router>
      </div>
    </ProjectsContextProvider>
  )
};

export default App;