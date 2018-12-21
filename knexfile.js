module.exports = {
  development: {
      client: 'pg',
      connection: {
        database: "hearthstone",
        host: "localhost",
        user: "postgres",
        password: "bjRedwall131664",
      },
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },
};
