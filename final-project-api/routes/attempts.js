const express = require('express');
const router  = express.Router();

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
    console.log("SO I DO GET HERE")

    return db.query(`
      INSERT INTO attempts (user_id, level_id, words_completed, time_taken, passed)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
    `, [user_id, level_id, words_completed, time_taken, passed])
      .then(response => {
        console.log("inserted attempt", response);
        // let userName = response.rows[0].name;
        // let userID = response.rows[0].id;
        // req.session["userName"] = userName;
        // req.session["userID"] = userID;
        // res.redirect("/postings");
        // return response.rows[0] ? response.rows[0] : null;
      })
      .catch(e => {
        response.send(e);
        console.log("CATCH BLOCK OF QUERY")
      });
  });

  return router;
};