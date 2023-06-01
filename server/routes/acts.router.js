const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "acts" ORDER BY "id" DESC`;
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
  const sqlText = `INSERT INTO "acts" (act)
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

router.delete('/:id', (req,res) => {
  console.log(req.params.id);
  const deleteIndex = Number(req.params.id);
  let queryText = 'DELETE FROM "acts" WHERE "id" = $1;';
  pool.query(queryText, [deleteIndex]).then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log(`Error in DELETE ${error}`)
    res.sendStatus(500);
  })
})

router.put('/save/:id', (req,res) => {
  const actID = Number(req.params.id);
  const act = req.body;
  console.log(`PUT /save/${actID}`);
  let queryText = `UPDATE "acts" SET "act" = $1 WHERE "id" = $2`;
  pool.query(queryText, [act.act, actID]).then(results => {
    res.sendStatus(200);
  }).catch(error => {
    console.log(`Error in PUT /acts ${error}`);
    res.sendStatus(500);
  })
})
module.exports = router;
