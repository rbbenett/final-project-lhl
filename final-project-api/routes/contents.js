const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    db.query(`SELECT * FROM contents;`)
      .then(data => {
        const contents = data.rows;
        res.json({ contents });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {

    let cleanText = req.body.cleanText;
    let level_id = req.body.level_id;
    let theme_id = req.body.theme_id;

    return db.query(`
      INSERT INTO contents (level_id, theme_id, content)
      VALUES($1, $2, $3)
      RETURNING *;
    `, [level_id, theme_id, cleanText])
      .then(response => {
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    });
  
  return router;
};