import axios from "axios";

export default axios.create({
  baseURL: "https://markgan-portfolio.herokuapp.com/" || 'http://localhost:3001' 
});

// "https://markgan-portfolio.herokuapp.com/" || 