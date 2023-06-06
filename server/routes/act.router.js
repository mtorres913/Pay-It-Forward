const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/random', (req, res) => {
  const queryText = `SELECT * FROM "acts"
  ORDER BY RANDOM()
  LIMIT 1`;
  pool
  .query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  })
});

router.get('/', (req, res) => {
  const userAct = req.body;
  const sqlText = `SELECT "user_acts".user_id, "user_acts".act_id, "user_acts".complete FROM 
  "user_acts" WHERE "user_acts".act_id = $1 AND "user_acts".user_id = $2`;
  pool.query(sqlText, [userAct.actID, userAct.userID])
  .then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const userAct = req.body;
  const sqlText = `INSERT INTO "user_acts" (user_id, act_id, complete)
  VALUES ($1, $2, True)`;
  pool.query(sqlText, [userAct.userID, userAct.actID])
  .then((result) => {
    console.log(`Added completed act to the database`, userAct);
    res.sendStatus(201);
  }).catch((error) => {
    console.log(`Error making database query ${sqlText}`, error);
    res.sendStatus(500);
  })
});

router.post('/favorite', (req, res) => {
  const userAct = req.body;
  const sqlText = `INSERT INTO "favorites" (user_id, act_id)
  VALUES ($1,$2)`;
  pool.query(sqlText, [userAct.userID, userAct.actID])
  .then((result) => {
    console.log(`Added favorited act to the database`, userAct);
    res.sendStatus(201);
  }).catch((error) => {
    console.log(`Error making database query ${sqlText}`, error);
    res.sendStatus(500);
  })
})


module.exports = router;
