const express = require('express');
const router = express.Router();
const db = require("../db")

router.use(express.json());


router.post('/projects/add-project', async (req, res) => {
  try {
    // console.log(req.body)
    const projects = await db.query(`
      INSERT INTO projects 
      (title, description, source_code, link) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *`, 
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

router.put('/projects/:id', async (req, res) => {
  try {
    const project = await db.query(`
      UPDATE projects 
      SET title = $1,
          description = $2,
          source_code = $3,
          link = $4 
      WHERE project_id = $5
      RETURNING *;`, 
      [req.body.title, req.body.description, req.body.url, req.body.link, req.params.id])

      res.status(200).json({
        status: "Success",
        data: {
          projects: project.rows[0],
        },
      })

  } catch (error) {
    console.log(error)
  }
})

router.delete('/projects/:id', async (req, res) => {
  try {
    const project = await db.query(`
      DELETE FROM projects 
      WHERE project_id = $1;`, 
      [req.params.id])

      res.status(200).json({
        status: "Success"
      })

  } catch (error) {
    console.log(error)
  }
})

module.exports = router