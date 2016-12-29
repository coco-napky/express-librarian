
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', table => {
      table.increments('user_id').primary();
      table.string('username', 60);
      table.timestamp('created_at');
    }),
    knex.schema.createTableIfNotExists('books', table => {
        table.increments('book_id').primary();
        table.string('name', 60);
    }),
    knex.schema.createTableIfNotExists('loans', table => {
      table.increments('loan_id').primary();
      table.integer('user_id').unsigned().references('user_id').inTable('users');
      table.integer('book_id').unsigned().references('book_id').inTable('books');
      table.timestamp('created_at');
    })
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTableIfExists('loans'),
    knex.schema.dropTableIfExists('users'),
    knex.schema.dropTableIfExists('books')
  ]);
};
