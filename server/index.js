const express = require('express');
const app = express();
const cors = require('cors');

// middleware

app.use(express.json()); // allows req.body for client side data access
app.use(cors()); //allows back end to interact with front end

// ROUTES 

// register and login routes

app.use('/auth', require('./routes/jwtAuth'));

// dashboard routes
app.use('/dashboard', require('./routes/dashboard'));

//listen on port
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});