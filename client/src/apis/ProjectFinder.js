import axios from "axios";

export default axios.create({
  baseURL: process.env.baseURL || 'http://localhost:3001'
});

// route exio path 
