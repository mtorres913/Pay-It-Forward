const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "acts"`;
  pool
  .query(queryText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const act = req.body;
  const sqlText = `INSERT INTO "acts" (acts)
  VALUES ($1)`;
  pool.query(sqlText, [act.act])
    .then((result) => {
      console.log(`Added act to the database`, act);
      res.sendStatus(201);
    }).catch((error) => {
      console.log(`Error in making database query ${sqlText}`, error);
      res.sendStatus(500);
    })
});

router.delet
module.exports = router;
