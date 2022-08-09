require('dotenv').config(

);
module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
      }
    : {
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      },
  migrations: { directory: './data/migrations/' },
  seeds: { directory: './data/seeds/' },
};
