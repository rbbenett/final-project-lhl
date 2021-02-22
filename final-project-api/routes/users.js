const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post('/', (req, res) => {
    let current_highest_level_passed = req.body.current_highest_level_passed;
    let wpm = req.body.wpm;
    let level_id = req.body.level_id;
    let user_id = req.body.user_id;
    let dbquery = ""
    let dbparams = ""

    if (level_id > current_highest_level_passed) {
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
      .then(response => {

      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ error: err.message });
      });
  })
  return router;
};
