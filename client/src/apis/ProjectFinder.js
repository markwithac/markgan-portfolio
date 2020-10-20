import axios from "axios";

const development = !process.env.NODE_ENV

export default axios.create(
  development ? { baseURL: "http://localhost:3001/api/v1" } : { baseULR: ""}
)

// route exio path 
