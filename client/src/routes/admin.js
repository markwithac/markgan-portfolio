import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminHome from "../components/Admin/Admin"
import AdminAddProject from "./Admin/adminAddProject";
import AdminArticleList from '../components/Admin/AdminArticleList';


const Admin = () => {
  return (
    <Router>
      <AdminHome />

      <Switch>
        <Route exact path="/admin/projects" component={AdminAddProject} />
        <Route exact path="/admin/articles" component={AdminArticleList} />
      </Switch>
    </Router>
)
};

export default Admin;