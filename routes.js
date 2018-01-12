'use strict';

module.exports = function (app) {
    // Task ***************************
    const task = require('./controllers/taskController');
    app.route('/tasks')
        .get(task.list)
        .post(task.create);

    app.route('/tasks/:id')
        .get(task.read)
        .put(task.update)
        .delete(task.delete);

    // Book ***************************
    const book = require('./controllers/bookController');
    app.route('/books')
        .get(book.list)
        .post(book.create);

    app.route('/books/:id')
        .get(book.read)
        .put(book.update)
        .delete(book.delete);

    // Lorem ***************************
    const lorem = require('./controllers/loremController');
    app.route('/lorems')
        .get(lorem.list);
};