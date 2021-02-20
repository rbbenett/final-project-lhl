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
    let current_highest_level_passed = req.body.current_highest_level_passed;
    let wpm = req.body.wpm;

    return db.query(`
      INSERT INTO attempts (user_id, level_id, words_completed, time_taken, passed)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
    `, [user_id, level_id, words_completed, time_taken, passed])
      .then(response => {
        console.log(current_highest_level_passed)
        let dbquery = ""
        let dbparams = ""
        if ((current_highest_level_passed) <= level_id) {
          dbquery = `
          UPDATE users
          SET highest_level_cleared = $1, words_per_min = $2
          WHERE id = $3
          RETURNING *;
          `
          dbparams = [level_id, wpm.toFixed(0), user_id]
        } else {
          dbquery = `
          UPDATE users
          SET words_per_min = $1
          WHERE id = $2
          RETURNING *;`
          dbparams = [wpm.toFixed(0), user_id]
        }
        db.query(dbquery, dbparams)
      }).then(response => {

      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ error: err.message });
        // console.log("CATCH BLOCK OF QUERY")
      });
  });
  return router;
};