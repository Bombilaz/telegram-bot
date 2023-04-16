const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: '5032864Ss!',
    host: 'localhost',
    port: 5423
})

module.exports = pool