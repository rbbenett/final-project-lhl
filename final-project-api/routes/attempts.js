const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM attempts;`)
      .then(data => {
        const attempts = data.rows;
        res.json({ attempts });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {

    let user_id = req.body.user_id;
    let level_id = req.body.level_id;
    let words_completed = req.body.words_completed;
    let time_taken = req.body.time_taken;
    let passed = req.body.passed;

    return db.query(`
      INSERT INTO attempts (user_id, level_id, words_completed, time_taken, passed)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
    `, [user_id, level_id, words_completed, time_taken, passed])
      .then(response => {
        res.send(response)
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};