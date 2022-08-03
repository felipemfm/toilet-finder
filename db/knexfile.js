module.exports = {
    client: 'pg', 
    connection: {database: 'greenfield', user: 'Joe', password: null}, 
    migrations: {directory: './data/migrations/'}, 
    seeds: {directory: './data/seeds/'}
};
