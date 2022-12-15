const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = async (req, res, next) => {
    try {
        //destructure the token which is sent in header
        const jwtToken = req.header('token');

        //if no token, not authorized
        if (!jwtToken) {
            return res.status(403).json('Not Authorized!');
        }
        //if token valid, authorize
        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = payload.user;

        next();

    } catch (err) {
        console.error(err.message);
        return res.status(401).json('Token is not valid!');
    }
};  