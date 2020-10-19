require('dotenv').config()

const express = require("express");
const db = require('./db')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());

// Get most recent projects for home page
app.get("/api/v1/", async (req, res) => {
  try {
    const projects = await db.query("SELECT * FROM projects");
    res.status(200).json({
      status: "Success",
      results: projects.rows.length,
      data: {
        projects: projects.rows,
      },
    })
  } catch (error) {
    console.error(error.message)
  }
})

// // Get all projects
// app.get("/api/v1/:projects", async (req, res) => {
//   try {
//     const projects = await db.query("SELECT * FROM projects");
//     res.status(200).json({
//       status: "Success",
//       results: projects.rows.length,
//       data: {
//         projects: projects.rows,
//       },
//     })
//   } catch (error) {
//     console.error(error.message)
//   }
// })


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
