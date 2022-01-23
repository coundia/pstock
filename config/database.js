module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'pstock'),
      user: env('DATABASE_USERNAME', 'coundia'),
      password: env('DATABASE_PASSWORD', 'cndf'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
