require('dotenv').config()

const express = require("express");
const db = require("./db")
const cors = require('cors')
const path = require("path")

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());

if (process.env.NODE_ENV === "production)") {
  app.use(express.static(path.join(__dirname, "client/build")));
}



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

app.post('/api/v1/admin/addProject', async (req, res) => {
  try {
    const projects = await db.query("INSERT INTO projects (title, description, url) VALUES ($1, $2, $3) RETURNING *", 
    [req.body.title, req.body.description, req.body.url]);
    res.status(200).json({
      status: "Success",
      data: {
        projects: projects.rows[0],
      },
    })
  } catch (error) {
    console.error(error.message)
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
