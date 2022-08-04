module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
      }
    : { database: 'greenfield', user: 'Joe', password: null },
  migrations: { directory: './data/migrations/' },
  seeds: { directory: './data/seeds/' },
};
