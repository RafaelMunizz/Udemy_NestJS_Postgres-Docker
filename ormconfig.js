module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'dcop2022',
    database: 'postgres',
    entities: ['dist/**/*.entiry.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations',
    },
  };