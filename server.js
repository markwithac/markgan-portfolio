require('dotenv').config()

const express = require("express");
const db = require("./db")
const cors = require('cors')
const path = require("path")
const articles = require('./routes/articles')
const admin = require('./routes/admin')

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());

app.use('/api/v1/articles', articles)
app.use('/api/v1/admin', admin)

// Get most recent projects for home page
app.get("/api/v1/", async (req, res) => {
  try {
    const [ projects, articles ] = await Promise.all([
      db.query("SELECT * FROM projects ORDER BY project_id DESC"), 
      db.query("SELECT * FROM articles ORDER BY article_id DESC") 
    ])
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));  

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
  })
}

app.listen(port, () => {
  console.log(`Server running on port ${port} in the ${process.env.PGHOST} environment`)
})
