
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
      knex('loans').del(),
      knex('users').del(),
      knex('books').del()
    ]).then(function () {
      return Promise.all([
        //users
        knex('users').insert({username: 'Brandon'}),
        knex('users').insert({username: 'Jose'}),
        knex('users').insert({username: 'Napky'}),

        //books
        knex('books').insert({name: 'El Alquimista'}),
        knex('books').insert({name: 'Don Quixote '}),
        knex('books').insert({name: '1984'}),
        knex('books').insert({name: 'War And Peace'}),
        knex('books').insert({name: 'Clean Code'}),
        knex('books').insert({name: 'Lord Of The Rings'}),
        knex('books').insert({name: 'Harry Potter'}),

        //loans
        knex('loans').insert({user_id: 1, book_id: 1}),
        knex('loans').insert({user_id: 2, book_id: 2}),
        knex('loans').insert({user_id: 3, book_id: 3}),
        knex('loans').insert({user_id: 1, book_id: 4}),
        knex('loans').insert({user_id: 1, book_id: 5}),
        knex('loans').insert({user_id: 1, book_id: 6}),
        knex('loans').insert({user_id: 2, book_id: 7}),
        knex('loans').insert({user_id: 2, book_id: 1})
      ]);
    });
};
