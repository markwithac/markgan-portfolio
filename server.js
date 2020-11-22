require('dotenv').config()

const express = require("express");
const db = require("./db")
const cors = require('cors')
const path = require("path")
const articles = require('./routes/articles')

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());
app.use('/api/v1/articles', articles)

// Get most recent projects for home page
app.get("/api/v1/", async (req, res) => {
  try {
    const [ projects, articles ] = await Promise.all([
      db.query("SELECT * FROM projects ORDER BY project_id DESC"), 
      db.query("SELECT * FROM articles ORDER BY article_id DESC") 
    ])
    // const projects = await db.query("SELECT * FROM projects ORDER BY project_id DESC");
    // const articles = await db.query("SELECT * FROM articles ORDER BY article_id DESC");
    res.status(200).json({
      status: "Success",
      project_results: projects.rows.length,
      article_results: articles.rows.length,
      data: {
        projects: projects.rows,
        articles: articles.rows
      },
    })
  } catch (error) {
    console.error(error.message)
  }
})

app.post('/api/v1/admin/addProject', async (req, res) => {
  try {
    const projects = await db.query("INSERT INTO projects (title, description, source_code, link, icon) VALUES ($1, $2, $3, $4) RETURNING *", 
    [req.body.title, req.body.description, req.body.url, req.body.link]);
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));  

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
  })
}

app.listen(port, () => {
  console.log(`Server running on port ${port} in the ${process.env.PGHOST} environment`)
})
