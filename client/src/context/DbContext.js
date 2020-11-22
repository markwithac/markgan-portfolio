import React, { useState, createContext } from "react";

export const DbContext = createContext();

export const DbContextProvider = (props) => {
  
  const [projects, setProjects] = useState([])
  const [articles, setArticles] = useState([])

  const addProject = (project) => {
    setProjects([...projects, project])
  };

  const addArticle = (article) => {
    setArticles([...articles, article])
  };
  
  return (
    <DbContext.Provider value={ { projects, setProjects, addProject, articles, setArticles, addArticle } }>
      {props.children}
    </DbContext.Provider>
  )
}