const express = require('express');
const router = express.Router();
const db = require("../db")

// Get all articles
router.get('/', async (req, res) => {
  try {
    const articles = await db.query("SELECT * FROM articles ORDER BY article_id DESC") 
    res.status(200).json({
      status: "Success",
      results: articles.rows.length,
      data: {
        articles: articles.rows,
      },
    })
  } catch (error) {
    console.error(error.message)
  }
})


router.get('/:article_id', async (req, res) => {
  try {
    const article = await db.query("SELECT * FROM articles WHERE article_id = $1", [req.params.article_id]) 
    res.status(200).json({
      status: "Success",
      results: article.rows.length,
      data: {
        article: article.rows,
      },
    })
  } catch (error) {
    console.error(error.message)
  }

})

module.exports = router