// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'library_dev',
      user:     'root',
      password: '21251122'    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'library_stage',
      user:     'root',
      password: '21251122'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'library',
      user:     'root',
      password: '21251122'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
