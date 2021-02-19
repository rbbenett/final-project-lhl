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

  router.post("/", (req, res) => {

    let username = req.body.username;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let password = req.body.password;
    let avatar = req.body.avatar;
    let city = req.body.city;
    let country = req.body.country;

    db.query(`
      INSERT INTO users (username, first_name, last_name, email, password, city, country, avatar)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `, [username, first_name, last_name, email, password, city, country, avatar])
      .then(response => {
        console.log("YOOO");
        db.query(`
            SELECT * FROM users
            WHERE username = $1 AND password = $2;
          `, [username, password])
          // .then(response => {
          //   if (response.rows[0]) {
          //     console.log("we found a user match!")
          //     console.log(response.rows)
          //     // res.send(response.rows)
          //   } else {
          //     console.log("dont exist!")
          //     // res.send("WRONG COMBO")
          //   }
          // })
      })
      .then(response => {
        if (response.rows[0]) {
          console.log("we found a user match!")
          console.log(response.rows)
          // res.send(response.rows)
        } else {
          console.log("dont exist!")
          // res.send("WRONG COMBO")
        }
      })
      .catch(e => {
        response.send(e);
        console.log("CATCH BLOCK OF QUERY")
      });
  });

  return router;
};