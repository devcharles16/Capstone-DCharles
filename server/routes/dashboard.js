const router = require('express').Router();
const pool = require('../db');
const authorization = require('../middleware/authorization');

// get all auto requests and user name

router.get('/', authorization, async(req, res) => {
    try {

        const user = await pool.query(
            'SELECT u.user_name, t.request_id, t.description FROM users AS u LEFT JOIN requests AS t ON u.user_id = t.user_id WHERE u.user_id = $1', [req.user]
            );
        res.json(user.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json('Server Error!');
    }
});

// create a request 

router.post('/requests', authorization, async (req, res) => {
    try {
        const { description } = req.body;
        const newrequest = await pool.query('INSERT INTO requests (user_id, description) VALUES ($1, $2) RETURNING *', [req.user, description]);
        res.json(newrequest.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
    });


// update a request

router.put('/requests/:id', authorization, async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updaterequest = await pool.query('UPDATE requests SET description=$1 WHERE request_id=$2 AND user_id=$3 RETURNING *', [description, id, req.user]);

        if (updaterequest.rows.length === 0){
            return res.json('This request is not yours');
        }

        res.json('request was updated!');
    } catch (err) {
        console.error(err.message);
    }
})


// delete a request
router.delete('/requests/:id', authorization, async (req, res) => {
    try {
        const { id } = req.params;
        const deleterequest = await pool.query('DELETE FROM requests WHERE request_id=$1 AND user_id=$2 RETURNING *', [id, req.user]);

        if (deleterequest.rows.length === 0) {
            return res.json('This request is not yours to delete');
        }

        res.json('request was deleted');
    } catch (err) {
        console.error(err.message);
    }
})


module.exports = router;