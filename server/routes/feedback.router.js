const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//Post feedback to db
router.post('/', (req, res) => {
    let newFeedback = req.body;
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`

    pool.query(queryText, [newFeedback.feeling, 
                            newFeedback.understanding, 
                            newFeedback.support, 
                            newFeedback.comments])
    .then(result =>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error in adding new feedback', error);
        res.sendStatus(500);
    })
}) // end POST route

router.get('/', (req, res)=>{
    let queryText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;
    pool.query(queryText).then((result)=>{
        //sends back the results in an object
        res.send(result.rows);
    }).catch((error)=>{
        console.log('error getting feedback', error);
        res.sendStatus(500);
    })
})//end GET route

module.exports = router;