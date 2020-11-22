const express = require('express');
const router = express.Router();

// Get all projects
router.get("/api/v1/", async (req, res) => {
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

module.exports = router