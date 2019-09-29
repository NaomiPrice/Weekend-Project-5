const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//Post feedback to db
router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log(newFeedback);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`

    pool.query(queryText, [5, 4, 3, 'not too bad so far'])
    .then(result =>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error in adding new feedback', error);
        res.sendStatus(500);
    })
})

module.exports = router;