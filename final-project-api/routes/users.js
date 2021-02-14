var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/users', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

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
  return router;
};

