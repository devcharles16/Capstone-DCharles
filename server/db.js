const Pool = require('pg').Pool

//define how to access and which database to access

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'vehicledatabase'
});

module.exports = pool;