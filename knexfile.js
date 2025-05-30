export default {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: '123456',
      database: 'arduinobalanca'
    },
    migrations: {
      directory: './db/migrations'
    }
  }
};